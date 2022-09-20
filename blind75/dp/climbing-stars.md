#[Questions](https://leetcode.com/problems/climbing-stairs/submissions/)

- Just like Fibonacci Number.

## Solution
```js
var climbStairs = function(n) {
    if (n <= 3) return n;
    
    const dp = [0,1,2,3];
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}
```

### With Destructing
```js
var climbStairs = function(n) {
    let prev = 0, cur = 1;
    for (let i = 0; i < n; i++) {
        [prev, cur] = [cur, prev + cur];
    }
    return cur;
}
```
