# [198. House Robber](https://leetcode.com/problems/house-robber/)

## Solution: Mine
```js
var rob = function(nums) {
    const dp = new Array(nums.length).fill(1);
    let max = -Infinity;
    
    if (!nums.length) return 0;
    
    if (nums.length === 1) return nums[0];
    
    dp[0] = 0;
    dp[1] = nums[0]
    max = dp[1];
    
    for (let i = 2; i <= nums.length; i++) {
        max = Math.max(max, dp[i - 2] + nums[i - 1]);
        dp[i] = max;
    }  
    return dp[nums.length] // max
};
```

### Explanation: Find the rule!

The key point to solve dp question is to find the rule of making a table.

ex: `[2,7,9,3,1]`
```
0 -> 0
1 -> 2 -> nums[0]
2 -> 7 -> max = Math.max(max, dp[0] + nums[1])
3 -> 2 + 9 = 11 -> max = Math.max(max, dp[1] + nums[2])
4 -> 2 + 9 = 11 -> Math.max(max, dp[2] + nums[3] = 10)
5 -> 2 + 9 + 1 = 12 -> Math.max(max, dp[3] + nums[4])
```

## [Solution: 3 lines](https://leetcode.com/problems/house-robber/discuss/55953/3-lines-solution-in-JavaScript)
```js
var rob = function(nums) {
    return nums.reduce(function(p, n) {
        return [p[1], Math.max(p[0] + n, p[1])]; 
    }, [0,0])[1];
};
```

With reduce, each `p[1]` would be last `Math.max(p[0] + n, p[1])`

So return the final `p[1]` would be the max.
