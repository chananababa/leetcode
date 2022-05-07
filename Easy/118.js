/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const row = [result[i-1][0]];
    for (let j = 0; j < result[i-1].length-1; j++) {
      row.push(result[i-1][j] + result[i-1][j+1]);
    }
    row.push(result[i-1][result[i-1].length-1]);
    result.push(row);
  }
  return result;
};
