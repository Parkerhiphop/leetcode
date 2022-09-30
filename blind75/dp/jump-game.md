# [55. Jump Game](https://leetcode.com/problems/jump-game/)

## [Solution: O(n) - Greedy](https://leetcode.com/problems/jump-game/discuss/273641/Javascript-Simple-O(N)-Greedy-Solution)
```js
var canJump = function(nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);

    if (max >= target) {
      return true;
    }

    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    idx++;
  }

  return false;
}
```

## [Solution: DP](https://leetcode.com/problems/jump-game/discuss/1473611/Javascript-DP-and-greedy-in-linear-time-with-explanations)
```js
var canJump = function(nums) {
    if (nums.length === 1) return true;

    const dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];
    
    // dp[i] is the max steps you left.
    // ex: dp[2] = 3 -> You still have 3 more steps at index 2
    for (let i = 1; i < nums.length; i++) {
       dp[i] = dp[i-1] > 0 ? Math.max(dp[i-1]-1, nums[i]) : -1;
    }
    
    
    return dp[nums.length - 1] >= 0;
};
```
