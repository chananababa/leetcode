/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const count = (str) => {
    const result = Array(26).fill(0);
    str.split('').forEach(c => {
      result[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    });
    return result;
  };
  const a = count(s);
  const b = count(t);
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
