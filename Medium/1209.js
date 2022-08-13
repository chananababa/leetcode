/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  const stack = [];
  const isDuplicated = (c) => {
    if (stack.length === 0) return false;
    return stack[stack.length-1][0] === c;
  };
  const push = (c) => {
    if (isDuplicated(c)) {
      stack[stack.length-1][1]++;
    } else {
      stack.push([c, 1]);
    }
  };
  const clear = () => {
    if (stack.length === 0) return;
    if (stack[stack.length-1][1] === k) {
      stack.pop();
    }
  };
  const toString = () => {
    const result = stack.reduce((result, p) => {
      for (let i = 0; i < p[1]; i++) {
        result.push(p[0]);
      }
      return result;
    }, []);
    return result.join('');
  };
  for (let i = 0; i < s.length; i++) {
    push(s[i]);
    clear();
  }
  
  return toString();
};
