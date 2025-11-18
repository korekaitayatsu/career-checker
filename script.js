// ======================
// 質問データ（例：20問）
// ======================
const questionData = [
  // カテゴリ: ストレス・健康（重み 1.3）
  {
    id: 1,
    category: "ストレス・健康",
    weight: 1.3,
    text: "最近3ヶ月で、仕事が原因と思われる強いストレスを感じることが多い。"
  },
  {
    id: 2,
    category: "ストレス・健康",
    weight: 1.3,
    text: "朝起きたときに「会社に行きたくない」と強く感じる日が多い。"
  },
  {
    id: 3,
    category: "ストレス・健康",
    weight: 1.3,
    text: "仕事のことを考えて眠れない、夜中に目が覚めるなど睡眠の質が落ちている。"
  },
  {
    id: 4,
    category: "ストレス・健康",
    weight: 1.3,
    text: "頭痛・胃痛・腹痛など、仕事が原因と思われる体調不良が続いている。"
  },
  {
    id: 5,
    category: "ストレス・健康",
    weight: 1.3,
    text: "仕事が原因で、家族や友人との関係に悪影響が出ていると感じる。"
  },

  // カテゴリ: 人間関係・ハラスメント（重み 1.3）
  {
    id: 6,
    category: "人間関係・ハラスメント",
    weight: 1.3,
    text: "上司から人格を否定するような発言・態度を受けることがある。"
  },
  {
    id: 7,
    category: "人間関係・ハラスメント",
    weight: 1.3,
    text: "職場で怒号・罵声・見せしめ的な叱責が日常的に行われている。"
  },
  {
    id: 8,
    category: "人間関係・ハラスメント",
    weight: 1.3,
    text: "同僚や上司との人間関係が悪く、職場に居場所がないと感じる。"
  },
  {
    id: 9,
    category: "人間関係・ハラスメント",
    weight: 1.3,
    text: "社内でいじめ・無視・陰口などがあり、自分や周囲が被害を受けている。"
  },
  {
    id: 10,
    category: "人間関係・ハラスメント",
    weight: 1.3,
    text: "相談できる上司・先輩・人事などがほとんどおらず、孤立している。"
  },

  // カテゴリ: 会社の将来性・コンプラ（重み 1.0）
  {
    id: 11,
    category: "会社の将来性・コンプライアンス",
    weight: 1.0,
    text: "会社の業績や事業の将来性に不安を感じる。"
  },
  {
    id: 12,
    category: "会社の将来性・コンプライアンス",
    weight: 1.0,
    text: "会社が法令やコンプライアンスを軽視していると感じる出来事がある。"
  },
  {
    id: 13,
    category: "会社の将来性・コンプライアンス",
    weight: 1.0,
    text: "上層部の意思決定が場当たり的で、一貫性がない。"
  },
  {
    id: 14,
    category: "会社の将来性・コンプライアンス",
    weight: 1.0,
    text: "「この会社で定年まで働きたい」とは思えない。"
  },

  // カテゴリ: 成長・キャリア（重み 1.1）
  {
    id: 15,
    category: "成長・スキル・キャリア",
    weight: 1.1,
    text: "今の仕事で、自分の市場価値があまり上がっていないと感じる。"
  },
  {
    id: 16,
    category: "成長・スキル・キャリア",
    weight: 1.1,
    text: "この会社・部署にいても、数年後のキャリアパスをイメージしづらい。"
  },
  {
    id: 17,
    category: "成長・スキル・キャリア",
    weight: 1.1,
    text: "単純作業やルーチンワークが多く、スキルが蓄積していない。"
  },
  {
    id: 18,
    category: "成長・スキル・キャリア",
    weight: 1.1,
    text: "社内に「この人のようになりたい」と思えるロールモデルがいない。"
  },

  // カテゴリ: 興味・やりがい・愛着（重み 0.7）
  {
    id: 19,
    category: "興味・やりがい・愛着",
    weight: 0.7,
    text: "自社の商品・サービスに、あまり愛着を持てない。"
  },
  {
    id: 20,
    category: "興味・やりがい・愛着",
    weight: 0.7,
    text: "「給料のためだけに続けている」と感じることが多い。"
  }

  // …同じ形式で 100 問まで増やせます …
];

// ======================
// 共通ユーティリティ
// ======================
const STORAGE_KEY = "career-checker-answers-v1";

// 配列シャッフル
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ======================
// 質問の描画 & 保存/復元
// ======================
function renderQuestions() {
  const container = document.getElementById("question-list");
  container.innerHTML = "";

  const shuffled = shuffle(questionData); // ランダム順
  shuffled.forEach((q, index) => {
    const no = index + 1;

    const block = document.createElement("section");
    block.className = "question";
    block.dataset.index = String(no);
    block.dataset.id = String(q.id);
    block.dataset.category = q.category;
    block.dataset.weight = String(q.weight);

    const header = document.createElement("div");
    header.className = "question-header";

    const numSpan = document.createElement("span");
    numSpan.className = "question-number";
    numSpan.textContent = `Q${no}`;

    const catSpan = document.createElement("span");
    catSpan.className = "question-category";
    catSpan.textContent = q.category;

    header.appendChild(numSpan);
    header.appendChild(catSpan);

    const textP = document.createElement("p");
    textP.className = "question-text";
    textP.textContent = q.text;

    const options = document.createElement("div");
    options.className = "options";

    const labels = [
      "1：まったく当てはまらない",
      "2：あまり当てはまらない",
      "3：どちらとも言えない",
      "4：やや当てはまる",
      "5：とても当てはまる"
    ];

    for (let v = 1; v <= 5; v++) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${q.id}`;
      input.value = String(v);
      input.dataset.displayIndex = String(no);

      input.addEventListener("change", () => {
        saveAnswersToStorage();
        block.classList.remove("unanswered");
      });

      label.appendChild(input);
      label.append(` ${labels[v - 1]}`);
      options.appendChild(label);
    }

    block.appendChild(header);
    block.appendChild(textP);
    block.appendChild(options);

    container.appendChild(block);
  });

  loadAnswersFromStorage(); // ロード後に反映
}

// 回答の保存
function saveAnswersToStorage() {
  const inputs = document.querySelectorAll('#question-list input[type="radio"]');
  const data = {};

  inputs.forEach((el) => {
    if (el.checked) {
      const qid = el.name.replace("q", "");
      data[qid] = el.value;
    }
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// 回答の復元
function loadAnswersFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return;
  }

  Object.entries(data).forEach(([qid, val]) => {
    const input = document.querySelector(
      `input[name="q${qid}"][value="${val}"]`
    );
    if (input) {
      input.checked = true;
    }
  });
}

// ======================
// スコア計算
// ======================
function calcScore() {
  const questions = document.querySelectorAll(".question");
  let totalWeighted = 0;
  let totalWeight = 0;
  let unanswered = [];
  const categoryTotals = {};
  const categoryWeights = {};

  let stressWeighted = 0;
  let stressWeight = 0;

  questions.forEach((q) => {
    const cat = q.dataset.category;
    const weight = parseFloat(q.dataset.weight || "1");
    const displayIndex = q.dataset.index;
    const checked = q.querySelector('input[type="radio"]:checked');

    if (!checked) {
      unanswered.push(Number(displayIndex));
      return;
    }

    const value = parseInt(checked.value, 10); // 1..5
    const normalized = (value - 1) / 4; // 0..1

    const wScore = normalized * weight;
    totalWeighted += wScore;
    totalWeight += weight;

    categoryTotals[cat] = (categoryTotals[cat] || 0) + wScore;
    categoryWeights[cat] = (categoryWeights[cat] || 0) + weight;

    if (cat === "ストレス・健康") {
      stressWeighted += wScore;
      stressWeight += weight;
    }
  });

  if (totalWeight === 0) {
    return { percent: 0, unanswered, categoryScores: {}, stressScore: 0 };
  }

  const ratio = totalWeighted / totalWeight;
  const percent = Math.round(ratio * 100);

  const categoryScores = {};
  Object.keys(categoryTotals).forEach((cat) => {
    const r = categoryTotals[cat] / categoryWeights[cat];
    categoryScores[cat] = Math.round(r * 100);
  });

  const stressScore =
    stressWeight > 0 ? Math.round((stressWeighted / stressWeight) * 100) : 0;

  return { percent, unanswered, categoryScores, stressScore };
}

// ======================
// メッセージ生成
// ======================
function buildMainComment(percent, stressScore) {
  let base;
  if (percent >= 80) {
    base =
      "かなり高い確率で『転職した方がよい』側に寄っています。健康面・キャリア面のリスクも踏まえて、真剣に選択肢の見直しを検討してよい状態です。";
  } else if (percent >= 60) {
    base =
      "『転職を前提に情報収集を始めるゾーン』です。現職で改善できるかどうかと、外の選択肢の両方を比べてみましょう。";
  } else if (percent >= 40) {
    base =
      "今すぐ辞めるほどではありませんが、不満や違和感が積み上がりつつある状態です。条件の棚卸しや、将来のキャリア設計を一度整理してみてください。";
  } else if (percent >= 20) {
    base =
      "現時点では『転職必須』というほどではなさそうです。ただし違和感が続く項目があれば、早めに上司・人事・専門家へ相談することをおすすめします。";
  } else {
    base =
      "この診断だけでは『転職しない方がよい』とまでは言い切れませんが、少なくとも回答内容からは大きな危険信号は読み取りにくい状態です。定期的に状況を見直していきましょう。";
  }

  // ストレス警告
  let stressMsg = "";
  if (stressScore >= 80) {
    stressMsg =
      "【ストレス強い警告】現在、かなり高いストレス状態にある可能性があります。健康面を最優先に、環境を変えることも含めて早めの対応を検討してください。";
  } else if (stressScore >= 70) {
    stressMsg = "【注意】ストレスも危険水域に近いです。無理を重ねないようご注意ください。";
  }

  return { base, stressMsg };
}

function buildHighStressAdvisory() {
  return (
    "高ストレス状態です。絶対に転職できない理由がない限りは、転職や休職を含めて環境を変える選択肢を早めに検討してください。" +
    " 体調不良や強いストレスが続く場合、適応障害やうつ病などのリスクもあり、危険な状態に陥るおそれがあります。" +
    " 会社に相談しづらい場合でも、ご家族や友人など信頼できる方に必ず相談してください。" +
    " また、まだ医療機関を受診していない・産業医面談を受けていない場合は、早めに受診・相談することを強くおすすめします。"
  );
}

function buildPopupMessage(percent, categoryScores, stressScore) {
  const lines = [];
  lines.push(`■総合診断：あなたが「転職したほうがいい」側に寄っている度合いはおよそ ${percent}% です。`);

  // 転職した方がいい要因／残った方がよい要因
  const reasonsLeave = [];
  const reasonsStay = [];

  Object.entries(categoryScores).forEach(([cat, score]) => {
    if (score >= 60) {
      reasonsLeave.push(`${cat}：不満・リスクが大きく、転職を検討してよい要因と考えられます（スコア ${score}%）。`);
    } else if (score <= 40) {
      reasonsStay.push(`${cat}：現職にも一定のメリットがある要因です（スコア ${score}%）。`);
    }
  });

  if (reasonsLeave.length > 0) {
    lines.push("");
    lines.push("■転職を検討した方がよい要因");
    reasonsLeave.forEach((t) => lines.push("・" + t));
  }

  if (reasonsStay.length > 0) {
    lines.push("");
    lines.push("■現職にとどまるメリット");
    reasonsStay.forEach((t) => lines.push("・" + t));
  }

  lines.push("");
  lines.push(
    "※この診断結果はあくまで自己チェック用の簡易ツールです。健康状態や家計、家族事情、今後のキャリアの方向性などを総合的に踏まえ、最終的な判断はご自身で行ってください。"
  );

  if (stressScore >= 80) {
    lines.push("");
    lines.push("■ストレスに関する重要な注意");
    lines.push(buildHighStressAdvisory());
  }

  return lines.join("<br>");
}

// ======================
// 未回答のハイライト
// ======================
function highlightUnanswered(unansweredIndexes) {
  // いったん全解除
  document.querySelectorAll(".question.unanswered").forEach((q) => {
    q.classList.remove("unanswered");
  });

  if (!unansweredIndexes.length) return;

  unansweredIndexes.forEach((idx) => {
    const q = document.querySelector(`.question[data-index="${idx}"]`);
    if (q) q.classList.add("unanswered");
  });

  const first = unansweredIndexes[0];
  const firstBlock = document.querySelector(`.question[data-index="${first}"]`);
  if (firstBlock) {
    firstBlock.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// ======================
// 診断ボタン押下時
// ======================
function handleCalc() {
  const { percent, unanswered, categoryScores, stressScore } = calcScore();
  const resultBox = document.getElementById("result");
  const scoreText = resultBox.querySelector(".score-text");
  const stressText = resultBox.querySelector(".stress-text");
  const comment = resultBox.querySelector(".comment");
  const ulLeave = document.getElementById("reason-leave");
  const ulStay = document.getElementById("reason-stay");

  if (unanswered.length > 0) {
    const listText = unanswered
      .sort((a, b) => a - b)
      .slice(0, 10)
      .map((n) => `Q${n}`)
      .join("、");
    alert(
      `まだ未回答の設問があります。\n未回答の例：${listText} など\nできるだけすべての設問に回答してから診断してください。`
    );
    highlightUnanswered(unanswered);
    return;
  }

  const { base, stressMsg } = buildMainComment(percent, stressScore);

  scoreText.textContent = `あなたが「転職したほうがいい」側に寄っている度合いはおよそ ${percent}% と推定されます。`;
  stressText.textContent = stressMsg || "";
  comment.textContent = base;

  // リスト更新
  ulLeave.innerHTML = "";
  ulStay.innerHTML = "";

  Object.entries(categoryScores).forEach(([cat, score]) => {
    if (score >= 60) {
      const li = document.createElement("li");
      li.textContent = `${cat}：転職を検討する理由になりうるゾーンです（スコア ${score}%）。`;
      ulLeave.appendChild(li);
    } else if (score <= 40) {
      const li = document.createElement("li");
      li.textContent = `${cat}：現職にとどまるメリットもあるゾーンです（スコア ${score}%）。`;
      ulStay.appendChild(li);
    }
  });

  resultBox.classList.remove("hidden");

  // モーダルも表示
  const modal = document.getElementById("result-modal");
  const backdrop = document.getElementById("modal-backdrop");
  const body = document.getElementById("modal-body");
  body.innerHTML = buildPopupMessage(percent, categoryScores, stressScore);
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");
}

// ======================
// 初期化
// ======================
document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();

  const button = document.getElementById("calcButton");
  button.addEventListener("click", handleCalc);

  const modalClose = document.getElementById("modal-close");
  const backdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("result-modal");
  function closeModal() {
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
  }
  modalClose.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  // ページ離脱時にも保存だけ実行（ブラウザメッセージは制限があるため）
  window.addEventListener("beforeunload", () => {
    saveAnswersToStorage();
  });
});
