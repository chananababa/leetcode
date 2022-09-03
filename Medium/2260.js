/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  const mem = Array.from({ length: 10**6 }).fill(-1);
  const MAX = 10**5 + 1;
  const r = cards.reduce((r, v, index) => {
    if (mem[v] > -1) {
      r = Math.min(r, index - mem[v] + 1);
    }
    mem[v] = index;
    return r;
  }, MAX);
  return r === MAX ? -1 : r;
};
