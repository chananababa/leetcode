/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const counter = {}
  candidates.forEach(v => {
    if (v in counter) {
      counter[v]++;
    } else {
      counter[v] = 1;
    }
  });
  candidates = Array.from(new Set(candidates));
  const N = candidates.length;
  const result = [];
  const recurse = (i, sum, stack) => {
    if (sum === target) {
      result.push([...stack]);
      return;
    };
    if (sum > target) {
      return;
    }
    for (let j = i; j < N; j++) {
      if (counter[candidates[j]] > 0) {
        counter[candidates[j]]--;
        sum += candidates[j];
        stack.push(candidates[j]);
        recurse(j, sum, stack);
        counter[candidates[j]]++;
        sum -= candidates[j];
        stack.pop();
      }
    }
  }
  recurse(0, 0, []);
  return result;
};
