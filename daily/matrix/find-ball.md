# [1706. Where Will the Ball Fall](https://leetcode.com/problems/where-will-the-ball-fall/)

## [Solution](https://leetcode.com/problems/where-will-the-ball-fall/discuss/1004545/Javascript-or-Simple-Solution-w-Explanation-or-beats-100-82)
```js
const findBall = function(grids) {
  let m = grids.length, n = grids[0].length, ans = [];

  for (let p = 0; p < n; p++) { // p for position of the ball
      let end = p;
      for (let i = 0; i < m; i++) {
        let dir = grid[i][end];
        if (dir === grid[i][end + dir]) end += dir
        else i = m, j = -1
      }

      ans[p] = end;
  }

  return ans;
}
```
