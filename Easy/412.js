/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const answer = [];
  const getAnswer = (v) => {
    const cases = ['FizzBuzz', 'Fizz', 'Buzz'];
    if (v % 3 === 0 && v % 5 === 0) return cases[0];
    if (v % 3 === 0) return cases[1];
    if (v % 5 === 0) return cases[2];
    return v.toString();
  };

  for (let i = 1; i <= n; i++) {
    answer.push(getAnswer(i));
  }
  return answer;
};
