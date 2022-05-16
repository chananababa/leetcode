/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const count = (s) => {
    const result = {};
    Array
      .from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
      .forEach(c => {
        result[c] = 0;
      });
    s.split('').forEach(c => {
      if (result[c]) {
        result[c]++;
      } else {
        result[c] = 1;
      }
    });
    return result;
  };
  const countS = count(s);
  const countT = count(t);
  
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
        .reduce((result, c) => {
          return result + Math.abs(countS[c] - countT[c]);
        }, 0) / 2;
};
