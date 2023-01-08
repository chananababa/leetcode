/**
 * @param {number[]} nums
 * @return {string}
 */

const removePrecedingZero = (str) => {
  let i = 0;
  while (i < str.length - 1 && str[i] === "0" && str[i + 1] === "0") {
    i += 1;
  }
  return str.slice(i);
};
var largestNumber = function (nums) {
  return removePrecedingZero(
    nums
      .map((n) => n.toString())
      .sort((a, b) => (a.concat(b) < b.concat(b) ? 1 : -1))
      .join("")
  );
};
