# [Questions](https://leetcode.com/problems/longest-increasing-subsequence/)

## Solution

Time complexity: O(N^2)

Use double for loop to find out all increasing subsequence.
`dp[i] = Math.max(dp[i], dp[j] + 1);`
- dp[i = 1] vs dp[j = 0] + 1
- dp[i = 2] vs dp[j = 0, 1] + 1
- dp[i = 3] vs dp[j = 0, 1, 2] + 1
- ...
- dp[nums.length - 1] vs dp[0~nums.length - 2] + 1

```js
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);
    let max = 1;
    
    for (let i=0; i < nums.length; i++) {
        for (let j=0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        
        max = Math.max(max, dp[i]);
    }
    
    return max;
};
```
