/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const visited = {}
  const repeat = (v) => {
    let result = 0;
    while(v > 0) {
      result += (v % 10) ** 2;
      v = Math.floor(v / 10);
    }
    return result;
  };
  
  while (n !== 1) {
    if (visited[n]) return false;
    visited[n] = true;
    n = repeat(n);
  }
  return true;
};
