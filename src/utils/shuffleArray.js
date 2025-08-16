export function shuffleArray(array) {
  const result = [...array];
  return result.sort(() => Math.random() - 0.5);
}
