/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
  x1 -= xCenter;
  x2 -= xCenter;
  y1 -= yCenter;
  y2 -= yCenter;
  const y = y1 * y2 < 0 ? 0 : Math.min(Math.abs(y1), Math.abs(y2));
  const x = x1 * x2 < 0 ? 0 : Math.min(Math.abs(x1), Math.abs(x2));
  return x ** 2 + y ** 2 <= radius ** 2;
};
