/* ==========================================================
   100問データ（がくさん提供＋不足5問補完）
========================================================== */

const questionData = [

  /* --- ストレス・健康（1〜15） weight 1.3 --- */
  { category: "ストレス・健康", weight: 1.3, text: "最近3ヶ月で、仕事が原因と思われる強いストレスを感じることが多い。" },
  { category: "ストレス・健康", weight: 1.3, text: "朝起きたときに「会社に行きたくない」と強く感じる日が増えてきている。" },
  { category: "ストレス・健康", weight: 1.3, text: "休日も仕事のことを考えてしまい、十分に休めた感覚がない。" },
  { category: "ストレス・健康", weight: 1.3, text: "仕事のことを考えると眠れない、または夜中に目が覚めてしまうことがある。" },
  { category: "ストレス・健康", weight: 1.3, text: "仕事が原因と思われる頭痛・胃痛・腹痛などの体調不良が続いている。" },
  { category: "ストレス・健康", weight: 1.3, text: "平日だけでなく、休日も疲労感が抜けないと感じる。" },
  { category: "ストレス・健康", weight: 1.3, text: "上司や顧客のプレッシャーが、自分の許容範囲を明らかに超えていると感じる。" },
  { category: "ストレス・健康", weight: 1.3, text: "仕事でミスをすると、必要以上に自分を責めてしまうことが多い。" },
  { category: "ストレス・健康", weight: 1.3, text: "最近「何をしても楽しくない」「何もやる気が出ない」と感じることが増えた。" },
  { category: "ストレス・健康", weight: 1.3, text: "仕事が原因で、家族や友人との人間関係がぎくしゃくしていると感じる。" },
  { category: "ストレス・健康", weight: 1.3, text: "会社にいる間、常に緊張しておりリラックスできる時間がほとんどない。" },
  { category: "ストレス・健康", weight: 1.3, text: "残業や長時間労働が慢性化しており、健康診断の結果にも悪影響が出ていると感じる。" },
  { category: "ストレス・健康", weight: 1.3, text: "「このまま働き続けたらまずいかも」と体の限界を意識することがある。" },
  { category: "ストレス・健康", weight: 1.3, text: "仕事が原因で、趣味やプライベートの時間をほとんど取れていない。" },
  { category: "ストレス・健康", weight: 1.3, text: "会社にいるとき、常に「早く帰りたい」と思っている自分がいる。" },

  /* --- 人間関係・ハラスメント（16〜30） weight 1.3 --- */
  { category: "人間関係・ハラスメント", weight: 1.3, text: "上司から人格を否定するような発言や態度を受けたことがある。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "職場で怒鳴り声や理不尽な叱責が日常的に行われている。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "セクハラ・パワハラ・モラハラに当たりそうな行為を見聞きすることがある。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "特定の人に仕事が集中し、不公平な負担がかかっていると感じる。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "上司や先輩の機嫌次第で、指示や評価が大きく変わるように感じる。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "同僚との関係がぎくしゃくしており、職場に居場所がないと感じることがある。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "社内でいじめ・無視・陰口などが行われている雰囲気を感じる。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "自分だけ情報共有から外される、または重要な情報が回ってこないと感じる。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "社内政治や派閥争いが激しく、仕事そのものより人間関係で疲弊している。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "相談できる上司や同僚がほとんどおらず、孤立感を覚える。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "仕事の不満よりも、人間関係のストレスの方が大きいと感じる。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "一部の人だけが理不尽なクレーム対応などを押し付けられている。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "会社の価値観や文化が自分と根本的に合わないと感じる。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "職場の空気感そのものが重く、「ここに長くいたくない」と感じることがある。" },
  { category: "人間関係・ハラスメント", weight: 1.3, text: "自分の意見やアイデアが、まともに取り合われないことが多い。" },

  /* --- 会社の将来性・コンプライアンス（31〜45） weight 1.0 --- */
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "会社の業績や財務状況に不安を感じるニュースや噂を耳にすることが多い。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "自社のビジネスモデルに将来性がないのではないかと感じることがある。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "業界全体が縮小傾向であり、会社として打ち手が弱いと感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "法令遵守より売上やノルマが優先されがちだと感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "上層部の意思決定が場当たり的で、一貫した戦略が見えない。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "不正やグレーな取引を見て見ぬふりしているような雰囲気がある。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "中長期的なビジョンが社員に共有されていない。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "数年後も今の会社が存続しているか不安を感じることがある。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "自社の商品やサービスが競合他社に比べて見劣りすると感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "上層部に尊敬できるリーダーが少ない。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "改善提案が形だけで、実際にはほとんど実行されない。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "市場の変化に対して会社の動きが鈍いと感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "現職に居続けることがキャリア上のリスクになる可能性を感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "新しい挑戦より現状維持を優先する文化が強い。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "「この会社で定年まで働きたい」と思えない。" },

  /* --- 成長・スキル・キャリア（46〜65） weight 1.1 --- */
  { category: "成長・スキル・キャリア", weight: 1.1, text: "いまの仕事で市場価値があまり上がっていないと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "この会社・部署では数年後のキャリアが描けない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "単純作業が多く、スキルが蓄積しづらい。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "新しい経験の機会がほとんど与えられない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "この会社にロールモデルが見当たらない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "年収レンジの伸びしろに乏しいと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "何でも屋的に扱われており専門性が高まらない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "自己投資が評価に反映されないことが多い。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "自分の強みが仕事で活かせていないと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "フィードバックが少なく成長実感が得づらい。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "転職サイトの求人を定期的に確認してしまう。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "現職がキャリアの選択肢を狭めていると感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "もっと良い環境なら活躍できるはずだと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "今の仕事が将来やりたいことにつながっていない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "胸を張れる代表的なスキルが乏しいと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "スキルアップ支援制度が形だけになっている。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "同年代と比較して成長が遅れていると感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "具体的に転職をイメージして情報収集したことがある。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "この会社で時間を使い続けるのは勿体ないと感じる。" },

  /* --- 興味・やりがい（66〜85） weight 0.7 --- */
  { category: "興味・やりがい・愛着", weight: 0.7, text: "自社の商品に強い愛着はなく淡々と扱っている。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "扱っている商材を胸を張って勧めづらいと感じる。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "業界や分野に元々興味があったわけではない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "仕事が楽しいという感覚より作業感が強い。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "担当業務に意義を感じにくい。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "この仕事を一生続けたいとは思えない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "仕事内容が得意分野とズレていると感じる。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "モチベ維持のために自分をかなり奮い立たせている。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "給料のためだけに続けている感覚がある。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "自分の仕事の価値が実感しづらい。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "一日がただ流れて終わる感覚になることが多い。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "職種やポジションに強いこだわりがない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "もっと自分らしさを活かせる仕事があると感じる。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "仕事を天職だとは思えない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "会社の理念にあまり共感していない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "社内イベントに興味がない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "やりがいよりストレスの方が大きいことが多い。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "将来誇れるキャリアになる気がしない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "仕事内容が自分の価値観とズレている。" },

  /* --- 報酬・条件・生活（86〜100） weight 1.0 --- */
  { category: "報酬・条件・生活", weight: 1.0, text: "同年代と比べて年収が低いと感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "残業代やインセンのルールが不透明だと感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "昇給・昇格の基準が曖昧で納得感がない。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "現給与では将来の貯蓄や投資計画が立てづらい。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "福利厚生や制度に物足りなさや不公平感がある。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "通勤や勤務地に強い不満がある。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "勤務時間が不規則で生活リズムが乱れやすい。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "有給を取りづらい雰囲気がある。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "ライフイベントとの両立に不安がある。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "異動や転勤が多く生活が振り回されている。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "大幅な年収UPが望みにくいと感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "副業をしたいが会社規定で難しいと感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "家計や将来のマネープランに不安が大きい。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "最低限欲しい年収に届いていない。" },

  /* 補完した 5問 */
  { category: "報酬・条件・生活", weight: 1.0, text: "今の会社に長くいるほど、不安の方が大きくなっていると感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "給与・待遇以外にも働く環境が自分に合っていないと感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "現職のまま数年働く将来像が描けず不安になる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "収入または働き方が限界に近づいていると感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "総合的に見て、今の条件のまま数年続けるのは難しいと感じる。" },
];

/* ==========================================================
   質問リストの描画（ランダム）
========================================================== */

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderQuestions() {
  const list = document.getElementById("question-list");
  list.innerHTML = "";

  const shuffled = shuffle([...questionData]);

  shuffled.forEach((q, idx) => {
    const block = document.createElement("div");
    block.className = "question";
    block.dataset.index = idx;
    block.dataset.weight = q.weight;

    block.innerHTML = `
      <p><strong>【${q.category}】</strong> ${q.text}</p>
      <label><input type="radio" name="q${idx}" value="1"> 1（全く当てはまらない）</label>
      <label><input type="radio" name="q${idx}" value="2"> 2</label>
      <label><input type="radio" name="q${idx}" value="3"> 3</label>
      <label><input type="radio" name="q${idx}" value="4"> 4</label>
      <label><input type="radio" name="q${idx}" value="5"> 5（非常に当てはまる）</label>
    `;

    list.appendChild(block);
  });

  loadAnswers();
}

/* ==========================================================
   回答の保存・復元（localStorage）
========================================================== */

function saveAnswer(key, value) {
  localStorage.setItem(key, value);
}

function loadAnswers() {
  questionData.forEach((_, idx) => {
    const saved = localStorage.getItem("q" + idx);
    if (saved) {
      const target = document.querySelector(`input[name="q${idx}"][value="${saved}"]`);
      if (target) target.checked = true;
    }
  });
}

/* ==========================================================
   未回答チェック → ジャンプ・強調
========================================================== */

function getUnanswered() {
  const blocks = document.querySelectorAll(".question");
  const list = [];

  blocks.forEach((b, idx) => {
    const checked = document.querySelector(`input[name="q${idx}"]:checked`);
    if (!checked) list.push(idx);
  });

  return list;
}

function scrollToQuestion(idx) {
  const target = document.querySelector(`.question[data-index="${idx}"]`);
  if (!target) return;
  target.classList.add("unanswered");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* ==========================================================
   スコア計算（加重平均＋ストレス警告）
========================================================== */

function calcScore() {
  let totalWeighted = 0;
  let totalWeight = 0;

  let stressWeighted = 0;
  let stressWeight = 0;

  const blocks = document.querySelectorAll(".question");

  blocks.forEach((b, idx) => {
    const w = parseFloat(b.dataset.weight);
    const checked = document.querySelector(`input[name="q${idx}"]:checked`);
    if (!checked) return;

    const v = parseInt(checked.value, 10);
    const normalized = (v - 1) / 4; // 0〜1

    totalWeighted += normalized * w;
    totalWeight += w;

    if (questionData[idx].category === "ストレス・健康") {
      stressWeighted += normalized * w;
      stressWeight += w;
    }
  });

  const percent = Math.round((totalWeighted / totalWeight) * 100);
  const stressPercent = Math.round((stressWeighted / stressWeight) * 100);

  return { percent, stressPercent };
}

/* ==========================================================
   最終コメント生成（長文レポート）
========================================================== */

function buildComment(percent, stressPercent) {
  let summary = "";
  let detail = "";

  /* --- 結論 --- */
  if (percent >= 80) {
    summary = "かなり高い確率で転職を検討すべき段階です。";
  } else if (percent >= 60) {
    summary = "転職を前提に選択肢を調べ始める段階です。";
  } else if (percent >= 40) {
    summary = "転職を強く急ぐ段階ではありませんが、不満は蓄積しています。";
  } else if (percent >= 20) {
    summary = "今すぐ転職必須という状況ではなさそうです。";
  } else {
    summary = "現時点では大きな危険信号は少ないようです。";
  }

  /* --- ストレス警告 --- */
  let stressWarn = "";
  if (stressPercent >= 70) {
    stressWarn = `
      <p style="color:#ff8b8b; font-weight:bold;">
      ※ストレス項目の数値が非常に高いです。危険水域に近い可能性があります。<br>
      必ず、上司・人事・産業医・家族・友人など、誰かに相談してください。
      </p>
    `;
  }

  /* --- 詳細レポート --- */
  detail = `
    <h3>【詳細レポート】</h3>
    <ul>
      <li>全カテゴリの加重平均に基づきスコアを算出しています。</li>
      <li>ストレス・健康、人間関係、将来性、スキル成長、興味・やりがい、報酬・条件の6軸評価です。</li>
      <li>高ストレス状態の場合、体調不良リスクも考慮した診断を行います。</li>
    </ul>
  `;

  return summary + stressWarn + detail;
}

/* ==========================================================
   ポップアップ（未回答警告）
========================================================== */

function showPopup(msg) {
  const popup = document.getElementById("popup");
  const message = document.getElementById("popup-message");
  message.innerHTML = msg;
  popup.classList.remove("hidden");
}

document.getElementById("popup-close").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});

/* ==========================================================
   診断ボタン
========================================================== */

document.getElementById("calcButton").addEventListener("click", () => {
  /* 回答の保存 */
  const blocks = document.querySelectorAll(".question");
  blocks.forEach((b, idx) => {
    const checked = document.querySelector(`input[name="q${idx}"]:checked`);
    if (checked) saveAnswer("q" + idx, checked.value);
  });

  /* 未回答チェック */
  const unanswered = getUnanswered();
  if (unanswered.length > 0) {
    const first = unanswered[0];
    scrollToQuestion(first);
    showPopup(`未回答の質問があります。（${unanswered.length}問）`);
    return;
  }

  /* スコア計算 */
  const { percent, stressPercent } = calcScore();

  /* 表示 */
  const scoreText = document.getElementById("score-text");
  const comment = document.getElementById("comment");

  scoreText.innerHTML = `あなたの「転職したほうがいい確率」は <strong>${percent}%</strong> です。`;
  comment.innerHTML = buildComment(percent, stressPercent);

  document.getElementById("result").classList.remove("hidden");
});

/* ==========================================================
   初期描画
========================================================== */

renderQuestions();
