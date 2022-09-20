# [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)

## Solution: O(n) Time Complexity

1. Find the reverse pattern: Reverse the array just like the arrow.
2. Use shift, pop and reverse to mock the spiral

```js
var spiralOrder = function(matrix) {
  let ans = [];

  while(matrix.length) {
    const first = matrix.shift();
    ans.push(...first);

    for (const m of matrix) {
      const val = m.pop();
      if (val) {
        ans.push(val);
        m.reverse();
      }
    }

    matrix.reverse();
  }

  return ans;
}
```
