// 質問ブロックごとに data-weight を読んで加重平均を出す
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

    const value = parseInt(checked.value, 10); // 1?5
    // 1→0, 5→1 になるように正規化
    const normalized = (value - 1) / 4;

    totalWeighted += normalized * weight;
    totalWeight += weight;
  });

  if (totalWeight === 0) return { score: 0, unanswered };

  const ratio = totalWeighted / totalWeight;   // 0?1
  const percent = Math.round(ratio * 100);     // 0?100%

  return { score: percent, unanswered };
}

function buildComment(percent) {
  if (percent >= 80) {
    return "かなり高い確率で転職を検討してよい状態です。健康面・キャリア面のリスクも踏まえて、具体的な情報収集や相談を始めてください。";
  } else if (percent >= 60) {
    return "転職を前提に「選択肢を調べ始める」ゾーンです。現職で改善できるかと、外の選択肢の両方を比べてみましょう。";
  } else if (percent >= 40) {
    return "今すぐ辞めるほどではないが、不満やモヤモヤが積み上がりつつある状態です。条件の棚卸しと、将来のキャリア設計を一度整理してみてください。";
  } else if (percent >= 20) {
    return "現時点では転職必須というほどではなさそうです。ただし、違和感が続く項目があれば、早めに上司・人事・第三者へ相談を。";
  } else {
    return "「転職しない方がいい」とは言い切れませんが、少なくとも今の回答からは大きな危険信号は読み取りにくい状態です。定期的に見直していきましょう。";
  }
}

document.getElementById("calcButton").addEventListener("click", () => {
  const { score, unanswered } = calcScore();
  const resultBox = document.getElementById("result");
  const scoreText = resultBox.querySelector(".score-text");
  const comment = resultBox.querySelector(".comment");

  if (unanswered > 0) {
    scoreText.textContent = `未回答の質問が ${unanswered} 問あります。できるだけ全部回答してから診断してください。`;
    comment.textContent = "";
  } else {
    scoreText.textContent = `あなたが「転職したほうがいい」確率は ${score}% です。`;
    comment.textContent = buildComment(score);
  }

  resultBox.classList.remove("hidden");
});