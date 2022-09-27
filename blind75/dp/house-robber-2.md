# [213. House Robber II](https://leetcode.com/problems/house-robber-ii/)

> The difference with [House Robber](house-robber.md) is this is a circle.

## [Solution: Mine - iteration](https://leetcode.com/problems/house-robber-ii/discuss/2627498/Simple-and-Easy-Javascript-Solution-with-10-lines)

Since the houses/nums are a circle, we could remove the first or last house/num to make the houses/nums not to be a circle.

Then, we just have to check the max money without first or last.

Implement the robMaxMoney function in the same way as 198. House Robber

```js
var rob = function(nums) {
    // if (!nums.length) return 0;
    // if (nums.length === 1) return nums[0];
    // The cleaner way below.
    if (nums.length <= 3) return Math.max(...nums);

    const housesWithoutLast = nums.slice(0, nums.length - 1);

    const housesWithoutFirst = nums.slice(1);
    
    return Math.max(robMaxMoney(housesWithoutLast), robMaxMoney(housesWithoutFirst))
};

const robMaxMoney = (houses) => houses.reduce((result, current) => {
    return [result[1], Math.max(result[1], result[0] + current)]
}, [0, 0])[1]
```

## [Solution: DP](https://leetcode.com/problems/house-robber-ii/discuss/1206593/Easy-DP-JS-Solution)
```js
var rob = function(nums) {
    if (nums.length <= 3) {
        return Math.max(...nums);
    }
    let moneyWithoutLastHouse = robHelper(0, nums.length - 2, nums);
    let moneyWithoutFirstHouse = robHelper(1, nums.length - 1, nums);
    return Math.max(moneyWithoutLastHouse, moneyWithoutFirstHouse);
    // T.C: O(N)
    // S.C: O(N)
};

const robHelper = (start, end, nums) => {
    let dp = new Array(start + (end - start + 1));
    for (let i = start; i <= end; i++) {
        // dp[i] = max(dp[i-1], dp[i-2] + nums[i]) 
        dp[i] = Math.max((dp[i-1] ? dp[i-1] : 0), (dp[i-2] ? dp[i-2] : 0) + nums[i]);
    }
    return dp[end];
}
```

## Failed Solution

- Think too many situations.
- But the difference is not about the element in the middle.
- It's only about the first and the last element.

```js
var rob = function(nums) {    
    if (!nums.length) return 0;
    
    if (nums.length === 1) return nums[0];
    
    if (nums[0] === nums[nums.length - 1]) {
        if (nums[2] > nums[1]) nums.pop()
        else nums.shift();
    } else if (nums[0] > nums[nums.length - 1]) {
        nums.pop();
    }
    else nums.shift();
    
    console.log(nums);

    return nums.reduce((result, current) => {
        return [result[1], Math.max(result[1], result[0] + current)]
    }, [0, 0])[1]
};
```
