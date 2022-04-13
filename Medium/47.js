/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const removeItem = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1));
  const permutation = (arr) => {
    if (arr.length === 1) return [arr];
    const visited = {};
    return arr.reduce((result, v, i) => {
      if (visited[v]) return result;
      visited[v] = true;
      result.push(...permutation(removeItem(arr, i)).map(r => [v].concat(r)));
      return result;
    }, []);
  };
  return permutation(nums);
};