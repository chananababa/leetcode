/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const mapToLetters = {
    1: [],
    2: 'abc'.split(''),
    3: 'def'.split(''),
    4: 'ghi'.split(''),
    5: 'jkl'.split(''),
    6: 'mno'.split(''),
    7: 'pqrs'.split(''),
    8: 'tuv'.split(''),
    9: 'wxyz'.split('')
  };
  const letters = digits.split('').map(digit => mapToLetters[digit]);
  const append = (letter, arr) => arr.map(r => letter + r);
  const compute = (i) => {
    if (i >= letters.length) return [''];
    return letters[i].map(letter => append(letter, compute(i+1))).flat(1);
  };
  const result = compute(0);
  if (result[0] === '') return [];
  return result;
};