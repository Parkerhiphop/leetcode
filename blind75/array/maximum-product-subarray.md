# [Questions](https://leetcode.com/problems/maximum-product-subarray/)

## Solution: DP
```js
var maxProduct = function(nums) {
    let max = nums[0];
    const dpMax = [nums[0]];
    const dpMin = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        current = nums[i];
        currentMax = current * dpMax[i - 1];
        currentMin = current * dpMin[i - 1];
        
        // max 需要跟 min 比較是因為有負數的情境
        // min 需要跟 max 比較也是同理
        dpMax[i] = Math.max(current, currentMax, currentMin)
        dpMin[i] = Math.min(current, currentMax, currentMin)
            
        max = Math.max(max, dpMax[i])
    }

    return max;
}
```

## Solution: 單純紀錄值並比較
```js
var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // curMax & curMin 都需要去跟 min or max 比較是因為有負數的情境
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}
```

## Solution: Mine (Failed)

沿用 maximum-subarray 的思路寫了 max & pre

但負數沒想到可以用 `prevMin` 來存，一直想了一堆複雜又無用的判斷

變化題沒過關ＱＱ

```js
var maxProduct = function(nums) {
    let max = nums[0];
    let pre = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (pre * nums[i] >= 0) {
            pre = Math.max(nums[i], pre * nums[i]);            
            max = Math.max(max, pre)
        } else if (nums[i + 1] < 0) {
            pre *= nums[i];
            max = pre;
        } else {
            pre = nums[i];
            max = Math.max(pre, max)
        }
    }
    
    return max;
};
```

---

## Kotlin Solution

概念一樣，用 prevMin, prevMax 和 maxProduct 來紀錄每個 index 當下的結果

並用 num, prevMin * num, preMax * num 來找出 continuous subarray 的最大、小 product

```Kotlin
class Solution {
  fun maxProduct(nums: IntArray): Int {
      // sanity check
      if(nums.isEmpty()) return 0
  
      var prevMin = 1
      var prevMax = 1
      
      var maxProduct = Integer.MIN_VALUE
      
      for(num in nums){
          val curMin = minOf(num, prevMin * num, prevMax * num)
          val curMax = maxOf(num, prevMin * num, prevMax * num)

          maxProduct = maxOf(maxProduct, curMax)
          
          prevMin = curMin
          prevMax = curMax
      }
      
      return maxProduct
  }
}
```