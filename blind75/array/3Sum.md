# [15. 3Sum](https://leetcode.com/problems/3sum/)
> #array #twopointers #sorting

## Solution: Two Pointer
Reference: [Two Pointer](../../notes/alogs/two-pointer-en.md)
1. Sort the nums first.
2. If sum = 0, the result either `[0,0,0]` or with at least one negative number.
3. Create a situation that iteration three value of nums.
   1. For loop (i)
   2. Two Pointer (from i + 1(start) to end)
4. Find the situtation `nums[i] + nums[start] + nums[end] === 0` and push to `result`.

```js
var threeSum = function(nums) {
    const result = [];
    if (nums.length < 3) return result;
    nums = nums.sort((a,b) => a-b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let start = i + 1;
        
        let end = nums.length - 1;
        
        while(start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            
            if (sum === 0) {
                result.push([nums[i], nums[start], nums[end]]);
                
                while (nums[start] === nums[start+1]) start++;
                while (nums[end] === nums[end - 1]) end--;
                
                start++;
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    
    return result;
};
```

### Explanation
```js
var threeSum = function(nums) {
  const results = [];
  
  if (nums.length < 3) return results;
  
  // sort the array first, since the order of triplets does not matter.
  nums = nums.sort((a,b) => a - b);
  
  let target = 0;
  
  // End before nums.length - 2 -> Save the room for the end pointer.
  for (let i = 0; i < nums.length - 2; i++) {
      // i should always be negative, so the 3rum has the chance to be 0
      if (nums[i] > target) break;
      // duplicate value -> go to next round
      if (i > 0 && nums[i] === nums[i-1]) continue;
      
      let j = i + 1;
      
      // k start from the end.
      let k = nums.length - 1;
      
      // nums is sorted, and j is the second
      // so the k should not bigger than j
      while (j < k) {
          let sum = nums[i] + nums[j] + nums[k];
          
          // if sum = 0;
          if (sum === target) {
              results.push([nums[i], nums[j], nums[k]])
              
              // if j has duplicate value, ignore it by j++;
              // use while loop to check if j's value is not duplicated.
              while (nums[j] === nums[j + 1]) j++;
              // Same as j -> ignore the duplicate value.
              while (nums[k] === nums[k - 1]) k--; 
              
              // Since the j & k already push to result, we should find new j and k by add and minus
              // The duplicate situation is solved by the while loop above.
              j++;
              k--;
          } else if (sum < target) {
              // sum !== 0 && sum < 0
              // nums' i+j+k < 0 means j is not big enough to meet the balance(sum = 0)
              // so we plus j to find out the larger one is nums.
              j++;
          } else {
              // sum !== 0 && sum > target.
              // nums' i+j+k > 0 means k is larger than we need.
              // So we minus k to find the right postive number we need.
              k--
          }
      }
  }
  
  // the result will start from smallest i & j and biggest k.
  // like [-1, -1, 2] or [-1, 0, 1]
  return results;
};
```
