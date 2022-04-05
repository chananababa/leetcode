/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const sArray = s.split('').map(c => c.charCodeAt(0) - 'a'.charCodeAt(0));
  const pArray = p.split('').map(c => c.charCodeAt(0) - 'a'.charCodeAt(0));
  
  let sStatus = Array(26).fill(0);
  const pStatus = toStatus(pArray);
  const result = [];
  sArray.forEach((_, i) => examine(i));
  
  return result;
  
  function isAnagram(status1, status2) {
    if (status1.length !== status2.length) return false;
    for (let i = 0; i < status1.length; i++) {
      if (status1[i] !== status2[i]) return false;
    }
    return true;
  }
  function toStatus(anArray) {
    const status = Array(26).fill(0);
    anArray.forEach(c => {
      status[c] += 1;
    });
    return status;
  }
  
  function examine(i) {
    if (i > sArray.length - pArray.length) return;
    if (i === 0) {
      sStatus = toStatus(sArray.slice(0, p.length));
    } else {
      sStatus[sArray[i-1]] -= 1;
      sStatus[sArray[i + p.length - 1]] += 1;
    }
    if (isAnagram(sStatus, pStatus)) {
      result.push(i);
    }
  }
};
