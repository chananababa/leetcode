/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const append = (parenthesis, arr) => {
    arr.forEach(r => r.push(parenthesis));
    return arr;
  }
  const run = (open, close) => {
    if (open === 0 && close === 0) return [[]];
    if (open === close) return append('(', run(open-1, close));
    else if(open > 0) return append(')', run(open, close-1)).concat(append('(', run(open-1, close)));
    else return append(')', run(open, close-1));
  };
  
  return run(n, n).map(r => r.reverse().join(''));
};
