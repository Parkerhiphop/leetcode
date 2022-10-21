# [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

## Solution: Hashmap
```js
const containsNearbyDuplicate = function(nums, k) {
    let hashmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (i - hasmap.get(nums[i]) <= k) {
            return true;
        }
        hasmap.set(nums[i], i);
    }
    return false;
};
```

## Solution: Set / Sliding Window -> Best
- Runtime: 93 ms, faster than 99.53%
- Memory Usage: 55.6 MB, less than 80.82%
  - 用 set.size 的話效能差一倍，用 i > k - 1 才能有這樣的效能

- Window 的大小是 k ，維持一個數量 =< k 的陣列
- 確保 Set.size =< k
- 而在其中如果有找到相同的值，就代表範圍至少有一個 i-j 在 k 之內，就可以直接回傳答案。

```js
var containsNearbyDuplicate = function(nums, k) {
    let window = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) return true;
        window.add(nums[i]);
        if (i > k - 1) window.delete(nums[i-k])
    }
    return false;
};
```
