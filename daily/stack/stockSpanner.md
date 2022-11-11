# [901. Online Stock Span](https://leetcode.com/problems/online-stock-span/description/)

## Solution: Stack
```js
var StockSpinner = function() {
  this.stack = [];
  this.index = -1;

  return null;
}

StockSpinner.prototype.next = function(price) {
  this.index++;

  if (!this.stack.length) {
    this.stack.push([this.index, price])
    return 1;
  } else {
    let [prevIndex, prevPrice] = this.stack(this.stack.length - 1);
    while(prevPrice < price) {
      this.stack.pop();
      if (!this.stack.length) break;
      [prevIndex, prevPrice] = this.stack(this.stack.length - 1);
    }
    this.stack.push([this.index, price])
    if (this.stack.length === 1) return this.index + 1;
    return this.index - prevIndex;
  }
}
```
