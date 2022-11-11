# [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
> #array #two-pointer

## Solution: Fast and Slow Pointer: O(n)
```js
var removeDuplicates = function(nums) {
  let slow = 0

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
  }

  return slow + 1
}
```

## Solution: Optimized: O(n)
- Instead of doing splice everytime do it at the end. So, it doesn't run O(n^2).
```js
var removeDuplicates = function(nums) {
  let prev = null

  for (let i = 0; i < nums.length; i++) {
    if (prev === nums[i]) continue;
    prev = nums[i]
    nums.push(nums[i]) // only push the non duplicated number
  }

  nums.splice(0, nums.length)
}
```

## Solution: Mine
- `Array.prototype.splice()` is too heavy.
```js
var removeDuplicates = function(nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--;
        } else {
            k++;
        }
    }

    return k;
};
```
