/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const mem = [];
  const r = [];  
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (mem.length > 0 && temperatures[mem[mem.length-1]] <= temperatures[i]) {
      mem.pop();
    }
    if (mem.length === 0) {
      r.push(0);
    } else {
      r.push(mem[mem.length-1] - i);
    }
    mem.push(i);
  }
  return r.reverse();
};
