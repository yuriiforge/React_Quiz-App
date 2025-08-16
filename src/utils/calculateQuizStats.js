export function calculateQuizStats(userAnswers, questions) {
  const skipped = userAnswers.filter((a) => a === null);
  const correct = userAnswers.filter((a, i) => a === questions[i].answers[0]);

  const skippedShare = Math.round((skipped.length / userAnswers.length) * 100);
  const correctShare = Math.round((correct.length / userAnswers.length) * 100);
  const wrongShare = 100 - skippedShare - correctShare;

  return { skippedShare, correctShare, wrongShare };
}
