"use strict";

// ===============================
// 質問データ（100問）
// ===============================
const questionData = [
  // ストレス・健康（1〜15） weight 1.3
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

  // 人間関係・ハラスメント（16〜30） weight 1.3
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

  // 会社の将来性・コンプライアンス（31〜45） weight 1.0
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "会社の業績や財務状況に不安を感じるニュースや噂を耳にすることが多い。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "自社のビジネスモデルに将来性がないのではないかと感じることがある。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "業界全体が縮小傾向であり、会社として打ち手が弱いと感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "法令遵守やコンプライアンスよりも、売上やノルマが優先されがちだと感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "上層部の意思決定が場当たり的で、一貫した戦略が見えない。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "不正やグレーな取引を見て見ぬふりしているような雰囲気がある。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "会社の中長期的なビジョンや戦略が、社員にほとんど共有されていない。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "数年後もこの会社が今のまま存続しているか不安を感じることがある。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "自社の商品・サービスが、競合他社に比べて明らかに見劣りすると感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "上層部に「この人についていきたい」と思えるリーダーが少ない。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "社内で出た改善提案が形だけで、実際にはほとんど実行されない。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "市場や顧客の変化に対して、会社の動きが鈍いと感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "自社に居続けることが、自分のキャリアにとってリスクになるかもしれないと感じる。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "新しいことに挑戦するよりも、現状維持を優先する文化が強い。" },
  { category: "会社の将来性・コンプライアンス", weight: 1.0, text: "「この会社で定年まで働きたい」とは思えない。" },

  // 成長・スキル・キャリア（46〜65） weight 1.1
  { category: "成長・スキル・キャリア", weight: 1.1, text: "いまの仕事で、自分の市場価値があまり上がっていないと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "この会社・部署では、数年後のキャリアのイメージが持てない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "単純作業やルーチンワークが多く、スキルが蓄積しづらいと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "新しい経験やチャレンジの機会がほとんど与えられていない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "社内に「この人のようになりたい」と思えるロールモデルが見当たらない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "このまま働き続けても、年収レンジが大きく伸びるイメージが湧かない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "専門性を高めるよりも、何でも屋的なポジションで扱われていると感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "勉強や自己投資をしても、評価や業務内容にあまり反映されていない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "自分の強みや得意分野を、仕事の中で活かせていないと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "上司からのフィードバックが少なく、成長実感を得にくい。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "転職サイトやエージェントの求人情報を、定期的にチェックしている。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "いまの会社にいることで、むしろキャリアの選択肢が狭まっている気がする。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "「もっと良い環境なら自分はもっと活躍できるはずだ」と感じることがある。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "今の仕事が、将来やりたいことにあまりつながっていないと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "現職で「これだけは身につけた」と胸を張れるスキルがあまりない。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "資格取得やスキルアップの支援制度が乏しい、もしくは形だけだと感じる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "社外の同年代と比べたとき、自分の成長ペースが遅いのではと不安になる。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "転職活動を具体的にイメージして情報収集をしたことが何度かある。" },
  { category: "成長・スキル・キャリア", weight: 1.1, text: "「ここで時間を使い続けるのはもったいないかもしれない」と感じることがある。" },

  // 興味・やりがい・愛着（66〜85） weight 0.7
  { category: "興味・やりがい・愛着", weight: 0.7, text: "自社の商品・サービスに強い愛着はなく、どちらかと言うと淡々と扱っている。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "扱っている商材を「人に胸を張っておすすめしづらい」と感じることがある。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "そもそもその業界や分野に、もともと強い興味があったわけではない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "仕事をしていても「楽しい」という感覚より「作業感」の方が強い。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "担当している業務に、やりがいや意義をあまり感じられていない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "「この仕事を一生続けたい」とは全く思わない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "現在の仕事内容が、自分の得意・好きな領域とズレていると感じる。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "仕事のモチベーションを保つために、自分をかなり奮い立たせる必要がある。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "「正直、給料のためだけに続けている」という感覚がある。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "自分の仕事が、誰のどんな役に立っているのか実感しづらい。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "一日が終わったときに「今日もなんとなく終わった」という感覚になりがちだ。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "今の職種やポジションに対して、そもそも強いこだわりがない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "「もっと自分らしさを活かせる仕事があるはず」と感じることがある。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "この仕事を天職だとは全く思わない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "会社の理念やビジョンに、あまり共感していない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "社内イベントや飲み会などに、積極的に参加したいとは思わない。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "やりがいよりも、ストレスや不満の方が大きいと感じることが多い。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "この仕事を続けても、将来誇れるキャリアになるイメージが湧きにくい。" },
  { category: "興味・やりがい・愛着", weight: 0.7, text: "業務内容が、自分の価値観や大切にしたいものとズレていると感じる。" },

  // 報酬・条件・生活（86〜100） weight 1.0
  { category: "報酬・条件・生活", weight: 1.0, text: "同年代と比べて、自分の年収が低いと感じることが多い。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "残業代やインセンティブなどのルールが不透明だと感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "昇給・昇格の基準が曖昧で、納得感がない。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "今の給与水準では、将来の貯蓄や投資の計画が立てづらい。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "福利厚生や各種制度に、物足りなさや不公平感を覚える。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "通勤時間や勤務地に対して、強い不満を感じている。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "シフトや勤務時間が不規則で、生活リズムが乱れがちである。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "有給休暇を取りづらい、または取りにくい雰囲気がある。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "結婚・出産・介護などのライフイベントと仕事の両立に不安がある。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "会社都合の異動や転勤が多く、生活が振り回されていると感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "今の会社にいても、これ以上の大幅な年収アップは望みにくいと感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "副業や複業をしたいが、会社の規定上むずかしいと感じる。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "家計や将来のマネープランに対する不安が大きい。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "「最低でもこれくらいは欲しい」と思う年収に届いていない。" },
  { category: "報酬・条件・生活", weight: 1.0, text: "自分の労力・責任の重さと、現在の報酬が見合っていないと強く感じる。" }
];

// ===============================
// 質問を画面に描画する
// ===============================
function renderQuestions() {
  const container = document.getElementById("question-list");
  if (!container) return;

  container.innerHTML = "";

  questionData.forEach((q, i) => {
    const index = i + 1;

    const block = document.createElement("section");
    block.className = "question";
    block.dataset.weight = q.weight;
    block.dataset.index = index;

    block.innerHTML = `
      <div class="q-header">
        <span class="q-no">${index}.</span>
        <span class="q-category">［${q.category}］</span>
      </div>
      <p class="q-text">${q.text}</p>
      <div class="q-options">
        <label><input type="radio" name="q${index}" value="1"> 1</label>
        <label><input type="radio" name="q${index}" value="2"> 2</label>
        <label><input type="radio" name="q${index}" value="3"> 3</label>
        <label><input type="radio" name="q${index}" value="4"> 4</label>
        <label><input type="radio" name="q${index}" value="5"> 5</label>
      </div>
    `;

    container.appendChild(block);
  });
}

// ===============================
// スコア計算（加重平均で％化）
// ===============================
function calcScore() {
  const questions = document.querySelectorAll(".question");
  let totalWeighted = 0;
  let totalWeight = 0;
  let unanswered = 0;

  questions.forEach(q => {
    const weight = parseFloat(q.dataset.weight || "1");
    const index = q.dataset.index;
    const checked = document.querySelector(`input[name="q${index}"]:checked`);

    if (!checked) {
      unanswered++;
      return;
    }

    const value = parseInt(checked.value, 10); // 1〜5
    // 1 → 0, 5 → 1 に正規化
    const normalized = (value - 1) / 4;

    totalWeighted += normalized * weight;
    totalWeight += weight;
  });

  if (totalWeight === 0) return { score: 0, unanswered };

  const ratio = totalWeighted / totalWeight; // 0〜1
  const percent = Math.round(ratio * 100);  // 0〜100

  return { score: percent, unanswered };
}

// ===============================
// コメント生成
// ===============================
function buildComment(percent) {
  if (percent >= 80) {
    return "かなり高い確率で転職を検討してよい状態です。健康面・キャリア面のリスクも踏まえて、具体的な情報収集や相談を始めてください。";
  } else if (percent >= 60) {
    return "転職を前提に「選択肢を調べ始める」ゾーンです。現職で改善できるかと、外の選択肢の両方を比べてみましょう。";
  } else if (percent >= 40) {
    return "今すぐ辞めるほどではないものの、不満やモヤモヤが積み上がりつつある状態です。条件の棚卸しや、将来のキャリア設計を一度整理してみてください。";
  } else if (percent >= 20) {
    return "現時点では転職必須というほどではなさそうです。ただし、違和感が続く項目があれば、早めに上司・人事・第三者へ相談しておきましょう。";
  } else {
    return "「転職しない方がいい」と言い切れるわけではありませんが、少なくとも今回の回答からは大きな危険信号は読み取りにくい状態です。定期的に見直していきましょう。";
  }
}

// ===============================
// 画面イベント
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();

  const button = document.getElementById("calcButton");
  const resultBox = document.getElementById("result");

  if (!button || !resultBox) return;

  const scoreText = resultBox.querySelector(".score-text");
  const comment = resultBox.querySelector(".comment");

  button.addEventListener("click", () => {
    const { score, unanswered } = calcScore();

    if (unanswered > 0) {
      if (scoreText) {
        scoreText.textContent = `未回答の質問が ${unanswered} 問あります。できるだけ全て回答してから診断してください。`;
      }
      if (comment) comment.textContent = "";
    } else {
      if (scoreText) {
        scoreText.textContent = `あなたが「転職したほうがいい」確率は ${score}% です。`;
      }
      if (comment) {
        comment.textContent = buildComment(score);
      }
    }

    resultBox.classList.remove("hidden");
  });
});
