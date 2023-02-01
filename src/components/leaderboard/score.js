export const scoreDecimal = 3;

export function getScore(placement) {
  return (-19.9975 * Math.pow(placement - 1, 0.5) + 100).toFixed(scoreDecimal);
}

export function getPlacement(score) {
  return Math.round(Math.pow((score - 100) / -19.9975, 2));
}
