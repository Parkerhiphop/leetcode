# [91. Decode Ways](https://leetcode.com/problems/decode-ways/)

## Solution
```js
var numDecodings = function(s) {
    if (!s || s[0] === '0') return 0;

    const dp = new Array(s.length + 1).fill(0)
    dp[0] = 1
    dp[1] = 1

    for (let i = 2; i <= s.length; i++) {
        const a = Number(s.slice(i - 1, i)) // last one digit
        if (a >= 1 && a <= 9) {
            dp[i] += dp[i - 1];
        }
        const b = Number(s.slice(i-2, i)); // last two digits
        if (b >= 10 && b <= 26) {
            dp[i] += dp[i-2];
        }
    }
    
    return dp[s.length];
};
```
