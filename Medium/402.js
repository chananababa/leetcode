/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const stack = [];
  const numArr = num.split('').map(v => parseInt(v));
  let remaining = k;
  numArr.forEach(v => {
    while (remaining > 0 && stack.length > 0 && stack[stack.length - 1] > v) {
      stack.pop();
      remaining -= 1;
    }
    stack.push(v);
  });
  while (remaining > 0 && stack.length > 0) {
    stack.pop();
    remaining -= 1;
  }

  if (stack.length === 0) return '0'
  let i = 0;
  while (stack[i] === 0) {
    i += 1;
  }
  if (i === stack.length) return '0'
  return stack.slice(i).join('');
};
