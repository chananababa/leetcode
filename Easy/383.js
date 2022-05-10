/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const count = (str) => {
    const result = Array(26).fill(0);
    str.split('').forEach(c => {
      result[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    });
    return result;
  }
  const a = count(ransomNote);
  const b = count(magazine);
  
  for (let i = 0; i < 26; i++) {
    if (a[i] > b[i]) return false;
  }
  return true;
};
