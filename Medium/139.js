/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const mem = Array(s.length).fill(-1);
  const findWords = (i, wordDict) => {
    return wordDict.filter(word => {
      return word === s.substr(i, word.length);
    });
  };
  const recurse = (i) => {
    if (i === s.length) return 1;
    if (mem[i] >= 0) return mem[i];
    return mem[i] = (findWords(i, wordDict).some(word => recurse(i + word.length)) ? 1 : 0);
  };
  return Boolean(recurse(0));
};
