/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const mem = Array(s.length).fill(-1);
  const check = (s) => {
    if (s.length === 1 && s !== '0') return true;
    if (s.length === 2 && s[0] !== '0' && parseInt(s) < 27) return true;
    return false;
  };
  const count = (i) => {
    if (i === s.length) return 1;
    if (mem[i] >= 0) return mem[i];
    mem[i] = 0;
    if (check(s.substr(i, 1))) mem[i] += count(i+1);
    if (i < s.length-1 && check(s.substr(i, 2))) mem[i] += count(i+2);
    return mem[i];
  };
  return count(0);
};
