/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  let t = -1;
  let c = 0;
  let result = -1;
  for (let i = 0; i < num.length; i++) {
    if (c > 0 && t === Number(num[i])) {
      c++;
    } else if (num[i] > result) {
      t = Number(num[i]);
      c = 1;
    } else {
      c = 0;
    }
    if (c === 3) {
      result = Math.max(result, t); 
    }
  }
  return result === -1 ? '' : `${result}${result}${result}`;
};
