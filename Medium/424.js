/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const frequencies = {};
  for (let i = 0; i < s.length; i++) {
    frequencies[s[i]] = 0;
  }
  let result = 0;

  let left = 0;
  let maxFrequency = 1;
  for (let right = 0; right < s.length; right++) {
    frequencies[s[right]] += 1;
    maxFrequency = Math.max(maxFrequency, frequencies[s[right]]);
    if (right - left + 1 - maxFrequency > k) {
      frequencies[s[left]] -= 1;
      if (s[left] === s[right]) {
        maxFrequency -= 1;
      }
      left += 1;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};
