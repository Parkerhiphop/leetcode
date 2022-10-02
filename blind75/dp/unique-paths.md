# [62. Unique Paths](https://leetcode.com/problems/unique-paths/)

https://leetcode.com/problems/unique-paths/discuss/511059/javascript-from-naive-recursive-to-dp-bottom-up

Problem can be decomposed into the following sub-problems:
1. can I go right?
2. can I go down?

The following base cases to get a response to those questions:
1. have I gone outside?
- return 0. This is not a valid path.
2. have I reached destination?
- return 1. This is a valid path.

Then I can add up the number of valid paths.

<!-- TODO: Review Again -->
## Solution: Recursive
```js
// m = row of grid = go down
// n = col of grid = go right
const uniquePaths = (m, n) => go(m,n,1,1)

function go(m,n,row,col) {
  if (row === m && col === n) return 1;
  if (row > m || col > n) return 0;

  const rightPaths = go(m,n,row, col + 1) 
  const downPaths = go(m, n, row + 1, col)

  return rightPaths + downPaths;
}
```

## Solution: DP
```js
const uniquePaths = (m, n) => {
  const dp = new Array(m).fill(0);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n).fill(1);
  }

  dp[m - 1][n - 1] = 1;

  // The step walk from [m-1][n-1] to [0,0]
  for (let row = m - 2; row >= 0; row--) {
    for (let col = n - 2; col >= 0; col--) {
      dp[row][col] = dp[row + 1][col] + dp[row][col + 1];
    }
  }

  return dp[0][0];
}

// ex: m=3, n=2, dp = [ [ 3, 1 ], [ 2, 1 ], [ 1, 1 ] ]
// ex: m=3, n=7
// dp = [
// [ 28, 21, 15, 10, 6, 3, 1],
// [ 7, 6, 5, 4, 3, 2, 1],
// [ 1, 1, 1, 1, 1, 1, 1]
// ]
```

## Solution: Memoized(DP + Recursive)
```js
const uniquePaths = (m, n) => {
  const memo = new Array(m + 1).fill(0);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(n + 1).fill(-1);
  }
  return go[m, n, 1, 1, memo];
}

const go = (m,n,row,col, memo) => {
  if (row === m && col === n) return 1;
  if (row > m || col > n) 

  if (memo[row][col] === -1) {
    const rightPaths = go(m,n,row, col + 1, memo) 
    const downPaths = go(m, n, row + 1, col, memo)

    memo[row][col] = rightPaths + downPaths;
  }

  return memo[row][col]
}

```

## Solution: DP Space Optimized
```js
const uniquePaths = (m, n) => {
  const dp = new Array(n).fill(1);

  // The step walk from end to start
  for (let row = m - 1; row > 0; row --) {
    for (let col = n - 2; col >= 0; col--) {
      dp[col] = dp[col] + dp[col + 1]
    }
  }
  return dp[0];
}

// ex: m= 3,n= 2, dp = [ 3, 1 ]
// ex: m= 3,n= 7, dp = [28, 21, 15, 10, 6,  3,  1]
```