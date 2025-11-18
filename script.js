// ==========================
// 質問100問データ
// ==========================
const questionData = [
    { category: "ストレス・健康", weight: 1.3, text: "仕事のことで考えを眠れないほど悩むことが増えている。" },
    { category: "ストレス・健康", weight: 1.3, text: "最近3ヶ月で、仕事が原因と思われる強いストレスを感じることが多い。" },
    { category: "人間関係・ハラスメント", weight: 1.3, text: "職場で相談できる相手がいない・孤立していると感じる。" },
    { category: "人間関係・ハラスメント", weight: 1.3, text: "上司・同僚の言動で精神的につらい思いをすることがある。" },
    { category: "職務・スキル・キャリア", weight: 1.0, text: "自分のスキルが正しく評価されていないと感じる。" },
    { category: "職務・スキル・キャリア", weight: 1.0, text: "今後のキャリアがこの会社で描けるとは思えない。" },
    { category: "労働条件・評価", weight: 1.1, text: "給与・待遇が市場価値に比べて低いと思う。" },
    { category: "労働条件・評価", weight: 1.1, text: "適切な評価がされていないと感じる場面が多い。" },
];

// ※本来100問分を入れる場所（いま8問だけサンプル）
// がくさんが100問揃え次第ここに追加します。

// ==========================
// シャッフル関数
// ==========================
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ==========================
// 質問描画
// ==========================
function renderQuestions() {
    const container = document.getElementById("question-container");
    container.innerHTML = "";

    const shuffled = shuffle([...questionData]);

    shuffled.forEach((q, index) => {
        const block = document.createElement("section");
        block.className = "question";
        block.dataset.index = index;
        block.dataset.weight = q.weight;
        block.dataset.category = q.category;

        block.innerHTML = `
            <p><strong>${index + 1}. ${q.text}</strong></p>
            <label><input type="radio" name="q${index}" value="1"> 1: 当てはまらない</label>
            <label><input type="radio" name="q${index}" value="2"> 2</label>
            <label><input type="radio" name="q${index}" value="3"> 3</label>
            <label><input type="radio" name="q${index}" value="4"> 4</label>
            <label><input type="radio" name="q${index}" value="5"> 5: とても当てはまる</label>
        `;
        container.appendChild(block);
    });
}

// ==========================
// 診断ロジック
// ==========================
function checkAnswers() {
    const blocks = document.querySelectorAll(".question");
    const unanswered = [];

    blocks.forEach(b => {
        const index = b.dataset.index;
        const checked = document.querySelector(`input[name="q${index}"]:checked`);
        if (!checked) {
            unanswered.push(index);
            b.classList.add("unanswered-highlight");
        } else {
            b.classList.remove("unanswered-highlight");
        }
    });

    return unanswered;
}

function calcScore() {
    const unanswered = checkAnswers();
    if (unanswered.length > 0) {
        alert(`未回答の設問があります。\n最初の未回答：${Number(unanswered[0]) + 1}問目へ移動します。`);
        const first = unanswered[0];
        const target = document.querySelector(`.question[data-index="${first}"]`);
        target.scrollIntoView({ behavior: "smooth" });
        return null;
    }

    // スコア計算
    let total = 0;
    let stressScore = 0;

    document.querySelectorAll(".question").forEach(q => {
        const index = q.dataset.index;
        const val = Number(document.querySelector(`input[name="q${index}"]:checked`).value);
        const weight = Number(q.dataset.weight);
        const category = q.dataset.category;

        total += val * weight;

        if (category === "ストレス・健康") stressScore += val * weight;
    });

    return { total, stressScore };
}

// ==========================
// 診断メッセージ
// ==========================
function buildMessage(total, stressScore) {
    let msg = "";

    if (total >= 80) {
        msg += "【結論】あなたは転職を強く検討すべき状況です。\n\n";
    } else if (total >= 60) {
        msg += "【結論】転職を検討した方がよい状況です。\n\n";
    } else {
        msg += "【結論】現時点では無理に転職する必要はありません。\n\n";
    }

    if (stressScore >= 70) {
        msg += "⚠️【ストレス警告】ストレス値が非常に高く、危険水域に近い状態です。\n"
             + "心身の不調や適応障害・うつ病などのリスクがあり、重大な危険に陥る可能性があります。\n"
             + "会社に相談できない場合、ご家族ご友人に必ず相談し、早急に環境を変える選択肢を検討してください。\n\n";
    }

    msg += "以下はあなたの状況の詳細です：\n";
    msg += "・ストレス要因、職場環境、評価の不公平感、キャリア不一致などが影響しています。\n";
    msg += "・改善する余地がない場合は、転職活動または休職も検討してください。\n";

    return msg;
}

// ==========================
// 診断ボタンクリック
// ==========================
document.getElementById("calcButton").addEventListener("click", () => {
    const result = calcScore();
    if (!result) return;

    const msg = buildMessage(result.total, result.stressScore);

    document.querySelector(".score-text").textContent =
        `総合スコア：${result.total.toFixed(1)}（ストレススコア：${result.stressScore.toFixed(1)}）`;

    document.querySelector(".comment").textContent = msg;

    document.getElementById("result").classList.remove("hidden");
});

// ==========================
// 初期化
// ==========================
renderQuestions();
