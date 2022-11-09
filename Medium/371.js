/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  const arr = [];
  let f = 1;
  const increase = () => {
    if (arr.length === 0) {
      arr.push(1);
      f = 1;
    } else if (f > 0) {
      arr.push(1);
    } else {
      arr.pop();
    }
  };
  const decrease = () => {
    if (arr.length === 0) {
      arr.push(1);
      f = -1;
    } else if (f > 0) {
      arr.pop();
    } else {
      arr.push(1);
    }
  };

  const calculate = (n) => {
    Array.from({ length: Math.abs(n) }).forEach(() => {
      n > 0 ? increase() : decrease();
    });
  }

  calculate(a);
  calculate(b);
  return f * arr.length;
};
