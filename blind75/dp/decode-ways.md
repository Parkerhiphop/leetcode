# [91. Decode Ways](https://leetcode.com/problems/decode-ways/)

## Solution
```js
var numDecodings = function(s) {
    if (!s || s[0] === '0') return 0;

    const dp = new Array(s.length + 1).fill(0)
    dp[0] = 1
    dp[1] = 1

    for (let i = 2; i <= s.length; i++) {
        const a = Number(s.slice(i - 1, i))
        // previous number can stand alone.
        if (a >= 1 && a <= 9) {
            // default dp[i] is previous number
            dp[i] = dp[i - 1];
        }
        const b = Number(s.slice(i-2, i));
        if (b >= 10 && b <= 26) {
            dp[i] += dp[i-2];
        }
    }
    
    return dp[s.length];
};
```

### Explanation
ex: "22321"

Check if the next number could be decode by itself or with previous number.
- Only can decode by itself =` dp[n-1]` (Remain the same output)
  - ex: the sum of dp[n-1] + '2' / since dp[n-2] + '32' is forbidden.
- Can decode with previous number =` dp[n-1]` + `dp[n-2]`
  - `dp[n-1]` is the default output, and add the `dp[n-2]`
  - ex: the sum of dp[n-1] + '2' and dp[n-2] + '12'

```js
i = 2: dp[1] + dp[0]
dp[1]: ('22') + ('3') -> 1
dp[0]: ('2') + ('23') -> 1
('2','23') | ('22', '3')
[ 1, 1, 2, 0, 0, 0, 0]

i = 3: dp[2] + dp[1]
dp[2]: ('2', '23') | ('22', '3') + ('2') -> 2
dp[1]: ('2', '2', '3', '2') -> 1
[1, 1, 2, 3, 0, 0, 0]

i = 4: dp[3] + dp[2]
dp[3]: ('2', '23', '2') | ('22', '3', '2') | ('2', '2', '3', '2') + ('1') -> 3
dp[2] -> X
[1, 1, 2, 3, 3, 0, 0]

i = 5: dp[4] + dp[3]
dp[4]: ('2', '23', '2', '1') | ('22', '3', '2', '1') | ('2', '2', '3', '2', '1') + '2' -> 3
dp[3]: ('2', '23', '2') | ('22', '3', '2') | ('2', '2', '3', '2') + '12' -> 3
[ 1, 1, 2, 3, 3, 6, 0]
```
