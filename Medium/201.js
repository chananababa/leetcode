/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  let result = 0;
  for (let i = 31; i >= 0; i--) {
    if ((left & 2**i) !== (right & 2**i)) {
      break;
    }
    result += left & 2**i;
  }
  return result;
};
