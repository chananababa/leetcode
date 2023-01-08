/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const r = dividend / divisor;
  return Math.min(
    2 ** 31 - 1,
    Math.max(-(2 ** 31), r < 0 ? Math.ceil(r) : Math.floor(r))
  );
};
