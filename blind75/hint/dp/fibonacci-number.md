# [Questions](https://leetcode.com/problems/fibonacci-number/submissions/)

可使用 recursion 或 DP。
但 DP 的執行速度會比 recursion 快一點（100ms vs 150ms）

## Solution: DP
```js
var fib = function(n) {
  if (n === 0 || n === 1) return n;
  const dp = [];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

因為 Fibonacci Number 很規律，運用 DP 的策略可以很簡單地就找到規律(`F(n)=F(n-1)+F(n-2)`)，最後也能使用查表的方式（`dp[n]`)來找到答案。

```js
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```

## Solution: recursion
```js
var fib = function(n) {
  if (n === 0 || n === 1) return n;
  return fib(n-1) + fib(n-2);
}
```
