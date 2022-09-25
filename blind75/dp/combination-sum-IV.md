# [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)

## Solution: Top Down dp
```js
var combinationSum4 = function(nums, target) {
    // const dp = Array(target + 1).fill(0);
    let dp = new Uint32Array(target+1) // the answer can fit in a 32-bit integer.
    
    dp[0] = 1;
    
    // nums.sort((a, b) => a - b); // the nums is already sorted.
  
    /* I miss the target iteration here. */
    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            /* Here's what I don't figure it out. */
            if (num <= i) dp[i] += dp[i-num]

        }
    }
    return dp[target]
};
```

### Explanation: `dp[i] = dp[i-num] + dp[i]`

ex: target = 4, nums = [1,2,3]

`dp[target = 4] = (dp[1] = 1) + (dp[4] = accumulate from 1 + 2, 1 + 3)`
```
1 1 Uint32Array(5) [ 1, 0, 0, 0, 0 ]
1 2 Uint32Array(5) [ 1, 1, 0, 0, 0 ]
1 3 Uint32Array(5) [ 1, 1, 0, 0, 0 ]
2 1 Uint32Array(5) [ 1, 1, 0, 0, 0 ]
2 2 Uint32Array(5) [ 1, 1, 1, 0, 0 ]
2 3 Uint32Array(5) [ 1, 1, 2, 0, 0 ]
3 1 Uint32Array(5) [ 1, 1, 2, 0, 0 ]
3 2 Uint32Array(5) [ 1, 1, 2, 2, 0 ]
3 3 Uint32Array(5) [ 1, 1, 2, 3, 0 ]
4 1 Uint32Array(5) [ 1, 1, 2, 4, 0 ]
4 2 Uint32Array(5) [ 1, 1, 2, 4, 4 ]
4 3 Uint32Array(5) [ 1, 1, 2, 4, 6 ]
```


## [Solution: Bottom up dp](https://leetcode.com/problems/combination-sum-iv/discuss/1166231/JS-Python-Java-C%2B%2B-or-Easy-DP-Solutions-(TD-and-BU)-w-Explanation)
<!-- TODO: REVIEW Again -->
```js
var combinationSum4 = function(nums, target) {
    let dp = new Uint32Array(target+1)
    dp[0] = 1;
    
    for (let i = 0; i < target; i++) {
        if (!dp[i]) continue;

        for (let num of nums) {
            console.log(i, num, dp)
            if (num + i <= target) dp[i+num] += dp[i]
        }
    }
    return dp[target]
};
```

### Explanation: `if (num + i <= target) dp[i+num] += dp[i]`
ex: target = 4, nums = [1,2,3]
num+i = 3 <= 4 -> dp[2] = dp[2] + dp[0] = 1
num+i = 4 <= 4 -> dp[3] = dp[3] + dp[0] = 1
```
0 1 Uint32Array(5) [ 1, 0, 0, 0, 0 ]
0 2 Uint32Array(5) [ 1, 1, 0, 0, 0 ]
0 3 Uint32Array(5) [ 1, 1, 1, 0, 0 ]
1 1 Uint32Array(5) [ 1, 1, 1, 1, 0 ]
1 2 Uint32Array(5) [ 1, 1, 2, 1, 0 ]
1 3 Uint32Array(5) [ 1, 1, 2, 2, 0 ]
2 1 Uint32Array(5) [ 1, 1, 2, 2, 1 ]
2 2 Uint32Array(5) [ 1, 1, 2, 4, 1 ]
2 3 Uint32Array(5) [ 1, 1, 2, 4, 3 ]
3 1 Uint32Array(5) [ 1, 1, 2, 4, 3 ]
3 2 Uint32Array(5) [ 1, 1, 2, 4, 7 ]
3 3 Uint32Array(5) [ 1, 1, 2, 4, 7 ]
```
