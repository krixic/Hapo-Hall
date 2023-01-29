const scoreDecimal = 3;

export function getScore(placement) {
  return (-19.9975 * Math.pow(placement - 1, 0.5) + 100).toFixed(scoreDecimal);
}
