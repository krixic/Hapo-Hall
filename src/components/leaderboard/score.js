const scoreDecimal = 3;

export function score(placement) {
  return (
    (Math.round(-19.9975 * Math.pow(placement - 1, 0.4) + 100) *
      Math.pow(10, scoreDecimal)) /
    Math.pow(10, scoreDecimal)
  );
}
