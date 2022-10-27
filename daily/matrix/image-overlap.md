# 835. Image Overlap

## [Solution: Brute force](https://leetcode.com/problems/image-overlap/discuss/2748110/Javascript-Solution-or-Brute-force-or-Beats-100)

```js
var largestOverlap = function(A, B) {
  let n = A.length;
  let result = 0;
  // -n + 1 -> Different direction?
  for (let i = -n + 1; i < n; i++) {
    for (let j = -n + 1; j < n; j++) {
      let t = 0;
      for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
          if (
            // out of border
            x + i >=0 &&
            x + i < n &&
            y + j >=0 &&
            y + j < n &&
            // compare A and B
            A[x][y] === 1 &&
            B[x+i][y+j] === 1
          ) t++;
        }
      }
      result = Math.max(result, t);
    }
  }

  return result;
}
```
