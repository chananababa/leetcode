/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < firstList.length && j < secondList.length) {
    const intersection = computeIntersection(i, j);
    if (intersection) {
      result.push(intersection);
    }
    if (firstList[i][1] < secondList[j][1]) {
      i += 1;
    } else if (firstList[i][1] > secondList[j][1]) {
      j += 1;
    } else {
      i += 1;
      j += 1;
    }
  }
  return result;
  
  function computeIntersection(i, j) {
    if (firstList[i][1] < secondList[j][0]) return null;
    if (firstList[i][0] > secondList[j][1]) return null;
    return [Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])];
  }
};