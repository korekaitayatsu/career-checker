// =============================
// 設定
// =============================
const STORAGE_KEY = "careerCheckerAnswers_v1";

// 質問番号 → カテゴリ
function getCategoryByIndex(idx) {
  idx = Number(idx);
  if (idx >= 1 && idx <= 15) return "ストレス・健康";
  if (idx >= 16 && idx <= 30) return "人間関係・ハラスメント";
  if (idx >= 31 && idx <= 45) return "会社の将来性・コンプライアンス";
  if (idx >= 46 && idx <= 65) return "成長・スキル・キャリア";
  if (idx >= 66 && idx <= 85) return "興味・やりがい・愛着";
  if (idx >= 86 && idx <= 100) return "報酬・条件・生活";
  return "その他";
}

// 高ストレス時に出す強い警告メッセージ
const STRESS_HIGH_MESSAGE =
  "ストレスに関する設問の結果から、かなり高いストレス状態にある可能性があります。" +
  "絶対に転職できない事情がない限りは、転職・部署異動・休職などを含めて環境を変える選択肢を早めに検討してください。" +
  "心身の不調や適応障害・うつ病などのリスクもあり、危険な状態に陥っていてご自身でお気づきでいない可能性もあります。" +
  "数年にわたり医療機関にかかっていない、または産業医との面談が済んでいない場合は、できるだけ早く関係部署や専門機関へ相談しましょう。" +
  "会社に相談できない場合でも、ご家族やご友人など信頼できる方に必ず状況を共有してください。";

// =============================
// 回答の保存・復元
// =============================
function loadAnswersFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);

    Object.entries(saved).forEach(([index, value]) => {
      const input = document.querySelector(
        `input[name="q${index}"][value="${value}"]`
      );
      if (input) {
        input.checked = true;
      }
    });
  } catch (e) {
    console.error("loadAnswersFromStorage error", e);
  }
}

function saveAnswersToStorage() {
  const questions = document.querySelectorAll(".question");
  const data = {};
  questions.forEach((q) => {
    const index = q.dataset.index;
    const checked = q.querySelector(`input[name="q${index}"]:checked`);
    if (checked) {
      data[index] = checked.value;
    }
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("saveAnswersToStorage error", e);
  }
}

// =============================
// スコア計算
// =============================
function calcScore() {
  const questions = document.querySelectorAll(".question");
  let totalWeighted = 0;
  let totalWeight = 0;
  let unanswered = 0;
  const unansweredIndexes = [];

  const categories = [
    "ストレス・健康",
    "人間関係・ハラスメント",
    "会社の将来性・コンプライアンス",
    "成長・スキル・キャリア",
    "興味・やりがい・愛着",
    "報酬・条件・生活",
  ];

  const categoryTotals = {};
  const categoryWeights = {};
  categories.forEach((c) => {
    categoryTotals[c] = 0;
    categoryWeights[c] = 0;
  });

  questions.forEach((q) => {
    const weight = parseFloat(q.dataset.weight || "1");
    const index = q.dataset.index;
    const checked = q.querySelector(`input[name="q${index}"]:checked`);

    // ハイライト解除
    q.classList.remove("unanswered-highlight");

    if (!checked) {
      unanswered++;
      unansweredIndexes.push(Number(index));
      return;
    }

    const value = parseInt(checked.value, 10); // 1〜5
    // 1→0, 5→1 に正規化（高いほど「転職した方がいい」方向）
    const normalized = (value - 1) / 4;

    totalWeighted += normalized * weight;
    totalWeight += weight;

    const cat = getCategoryByIndex(index);
    if (categoryTotals[cat] !== undefined) {
      categoryTotals[cat] += normalized * weight;
      categoryWeights[cat] += weight;
    }
  });

  if (totalWeight === 0) {
    return {
      score: 0,
      unanswered,
      unansweredIndexes,
      categoryScores: {},
      stressScore: 0,
    };
  }

  const ratio = totalWeighted / totalWeight; // 0〜1
  const percent = Math.round(ratio * 100); // 0〜100%

  const categoryScores = {};
  categories.forEach((c) => {
    if (categoryWeights[c] > 0) {
      categoryScores[c] = Math.round(
        (categoryTotals[c] / categoryWeights[c]) * 100
      );
    } else {
      categoryScores[c] = null;
    }
  });

  const stressScore = categoryScores["ストレス・健康"] || 0;

  return {
    score: percent,
    unanswered,
    unansweredIndexes,
    categoryScores,
    stressScore,
  };
}

// =============================
// コメント・ポップアップ文面
// =============================
function buildMainComment(percent, stressScore) {
  let base;
  if (percent >= 80) {
    base =
      "かなり高い確率で転職を検討してよい状態です。健康面・キャリア面のリスクも踏まえて、具体的な情報収集や相談を始めてください。";
  } else if (percent >= 60) {
    base =
      "転職を前提に「選択肢を調べ始める」ゾーンです。現職で改善できるかと、外の選択肢の両方を比べてみましょう。";
  } else if (percent >= 40) {
    base =
      "今すぐ辞めるほどではないものの、不満やモヤモヤが積み上がりつつある状態です。条件の棚卸しと、今後のキャリア設計を整理してみてください。";
  } else if (percent >= 20) {
    base =
      "現時点では「今すぐ転職必須」というほどではなさそうです。ただし違和感が続く項目があれば、早めに上司・人事・第三者へ相談してみましょう。";
  } else {
    base =
      "この診断だけでは「転職しない方がよい」とまでは言い切れませんが、大きな危険信号は読み取りにくい状態です。とはいえ、定期的に状況を見直していきましょう。";
  }

  // ストレス優先メッセージ（短い版）
  let stressNote = "";
  if (stressScore >= 80) {
    stressNote =
      "　なお、ストレスに関する設問の結果から高ストレス状態の可能性があります。健康面を最優先に、環境を変えることも含めて早めの対応をご検討ください。";
  } else if (stressScore >= 70) {
    stressNote = "　ストレスも危険水域に近い水準です。無理を重ねすぎないよう注意してください。";
  }

  return base + stressNote;
}

function buildPopupMessage(percent, categoryScores, stressScore) {
  const lines = [];

  lines.push(
    `【総合診断】\nあなたが「転職を検討した方がよい」確率は ${percent}% です。`
  );

  // 総合コメント
  lines.push("");
  lines.push("■全体コメント");
  lines.push(buildMainComment(percent, stressScore));

  // ストレス強警告（80%以上）
  if (stressScore >= 80) {
    lines.push("");
    lines.push("■ストレスに関する重要な注意");
    lines.push(STRESS_HIGH_MESSAGE);
  }

  // カテゴリ別の傾向
  const reasonsLeave = [];
  const reasonsStay = [];

  Object.entries(categoryScores).forEach(([cat, score]) => {
    if (score == null) return;
    if (score >= 60) {
      reasonsLeave.push(`${cat}（スコア ${score}%）`);
    } else if (score <= 40) {
      reasonsStay.push(`${cat}（スコア ${score}%）`);
    }
  });

  if (reasonsLeave.length > 0) {
    lines.push("");
    lines.push("■転職を検討した方がよい主な要因");
    reasonsLeave.forEach((t) => lines.push("・" + t));
  }

  if (reasonsStay.length > 0) {
    lines.push("");
    lines.push("■今の会社にとどまる判断材料になりそうな点");
    reasonsStay.forEach((t) => lines.push("・" + t));
  }

  lines.push("");
  lines.push(
    "※この診断はあくまで自己チェック用の簡易ツールです。健康状態や人生の重要な決断については、医療機関・公的相談窓口・信頼できる第三者などと必ず相談しながら判断してください。"
  );

  return lines.join("\n");
}

// =============================
// 未回答ハイライト & スクロール
// =============================
function highlightUnanswered(unansweredIndexes) {
  if (!unansweredIndexes || unansweredIndexes.length === 0) return;

  unansweredIndexes.forEach((idx) => {
    const q = document.querySelector(`.question[data-index="${idx}"]`);
    if (q) {
      q.classList.add("unanswered-highlight");
    }
  });

  const firstIdx = unansweredIndexes[0];
  const firstQ = document.querySelector(`.question[data-index="${firstIdx}"]`);
  if (firstQ) {
    firstQ.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// =============================
// 初期化
// =============================
document.addEventListener("DOMContentLoaded", () => {
  // 回答の復元
  loadAnswersFromStorage();

  // ラジオボタン変更時に自動保存 & ハイライト解除
  const radios = document.querySelectorAll('input[type="radio"][name^="q"]');
  radios.forEach((r) => {
    r.addEventListener("change", () => {
      const name = r.name; // "q12" など
      const index = name.replace("q", "");
      const q = document.querySelector(`.question[data-index="${index}"]`);
      if (q) q.classList.remove("unanswered-highlight");
      saveAnswersToStorage();
    });
  });

  // ページ離脱時のメッセージ（対応ブラウザでは表示）
  window.addEventListener("beforeunload", (e) => {
    // 何かしら回答がある場合だけ
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      e.preventDefault();
      e.returnValue = "回答は一時保存いたします。";
    }
  });

  // 診断ボタン
  const button = document.getElementById("calcButton");
  const resultBox = document.getElementById("result");
  const scoreText = resultBox.querySelector(".score-text");
  const comment = resultBox.querySelector(".comment");

  button.addEventListener("click", () => {
    const { score, unanswered, unansweredIndexes, categoryScores, stressScore } =
      calcScore();

    if (unanswered > 0) {
      // 未回答あり
      const listText = unansweredIndexes.join(", ");
      scoreText.textContent = `未回答の質問があります（質問番号：${listText}）。できるだけすべて回答してから診断してください。`;
      comment.textContent = "";

      highlightUnanswered(unansweredIndexes);
      resultBox.classList.remove("hidden");
      return;
    }

    // 通常の結果表示
    scoreText.textContent = `あなたが「転職したほうがいい」確率は ${score}% です。`;
    comment.textContent = buildMainComment(score, stressScore);
    resultBox.classList.remove("hidden");

    // ポップアップ（長文まとめ）
    const popupMessage = buildPopupMessage(score, categoryScores, stressScore);
    alert(popupMessage);
  });
});
