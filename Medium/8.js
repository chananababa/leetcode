/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const splitSign = (s) => {
    if (s.length === 0) return [1, ''];
    if (s[0] === '-') return [-1, s.slice(1)];
    if (s[0] === '+') return [1, s.slice(1)];
    return [1, s];
  };
  const isNumber = (c) => {
    return !isNaN(c) && c !== ' ';
  }
  const convert = (s) => {
    const arr = [];
    let i = 0;
    while (i < s.length && isNumber(s[i])) {
      arr.push(s[i]);
      i++;
    }
    let result = 0;
    let e = 1;
    for (let j = arr.length - 1; j >= 0; j--) {
      result += arr[j] * e;
      e *= 10;
    }
    return result;
  };
  const clamp = (v) => {
    return Math.max(Math.min(2 ** 31 - 1, v), -(2 ** 31));
  };

  const [sign, rest] = splitSign(s.trim());

  return clamp(sign * convert(rest));
};
