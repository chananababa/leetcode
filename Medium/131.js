/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const isPalindrome = (a, b) => {
    return (
      s.slice(a, b + 1) ===
      s
        .slice(a, b + 1)
        .split("")
        .reverse()
        .join("")
    );
  };
  const run = (a, b) => {
    if (a === b) return [[s[a]]];
    if (a > b) return [[]];
    const result = [];
    for (let i = a; i <= b; i++) {
      if (isPalindrome(a, i)) {
        run(i + 1, b).forEach((r) => result.push([s.slice(a, i + 1), ...r]));
      }
    }
    return result;
  };

  return run(0, s.length - 1);
};
