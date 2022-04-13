/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function run(s) {
    const arr = [];
    s.split('').forEach(c => {
      if (c === '#') {
        arr.pop();
      } else {
        arr.push(c);
      }
    });
    return arr.join();
  }
  return run(s) === run(t);
};