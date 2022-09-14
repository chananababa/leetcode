
var StockSpanner = function() {
  this.stack = [];
  this.i = 0;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let r;
  while (this.stack.length > 0 && this.stack[this.stack.length - 1][1] <= price) {
    this.stack.pop();
  }
  if (this.stack.length === 0) r = this.i+1;
  else r = this.i - this.stack[this.stack.length - 1][0];
  this.stack.push([this.i, price]);
  this.i++;
  return r;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
