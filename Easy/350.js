/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const convertToObject = (arr) => {
    const result = {};
    arr.forEach(v => {
      if (v in result) {
        result[v]++;
      } else {
        result[v] = 1;
      }
    });
    return result;
  };
  
  const o1 = convertToObject(nums1);
  const result = [];
  nums2.forEach(v => {
    if (o1[v]) {
      o1[v]--;
      result.push(v);
    }
  });
  return result;
};
