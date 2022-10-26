# [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)

## Solution: Prefix Sum
- Check if the mod is duplicate.
  - Memo the cur mod and prev mod.
- If the mod is duplicate -> k has been completely divided once, so return true.

TC : O(n)
SC : O(k) (mod value can range from [0, k - 1], so max length will be k)

```js
const checkSubarraySum = (nums, k) => {
  let mod = 0;
  let prevMod = 0;
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    mod += nums[i];

    if (k !== 0) mod %= k

    if (set.has(mod)) return true;

    set.add(prevMod);
    prevMod = mod;
  }

  return false;
}
```
