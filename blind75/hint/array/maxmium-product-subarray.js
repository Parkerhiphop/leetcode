const solution1 = `
    我用加法的方式去想，一直沒處理好負數
    但其實原理也很簡單，既然負數會有負負得正翻盤的可能性，那就再多 let 一個 prevMin 來紀錄當前的負值
    若下一個值也是負的時，在 nums[i] * prevMin 就能成功翻盤！
`;

var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        // 紀錄最小值，讓 max 能夠比較到負負得正的情境
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}

const mySolution = `
  (Failed)
  沿用 maximum-subarray 的思路寫了 max & pre
  負數沒想到可以用 prevMin 來存，一直想了一堆複雜又無用的判斷
  變化題沒過關ＱＱ
`;

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


const kotlinSolution = `
  概念一樣，用 prevMin, prevMax 和 maxProduct 來紀錄每個 index 當下的結果
  並用 num, prevMin * num, preMax * num 來找出 continuous subarray 的最大、小 product
`;

// class Solution {
//   fun maxProduct(nums: IntArray): Int {
//       // sanity check
//       if(nums.isEmpty()) return 0
  
//       var prevMin = 1
//       var prevMax = 1
      
//       var maxProduct = Integer.MIN_VALUE
      
//       for(num in nums){
//           val curMin = minOf(num, prevMin * num, prevMax * num)
//           val curMax = maxOf(num, prevMin * num, prevMax * num)

//           maxProduct = maxOf(maxProduct, curMax)
          
//           prevMin = curMin
//           prevMax = curMax
//       }
      
//       return maxProduct
//   }
// }