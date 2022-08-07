const source = 'https://leetcode.com/problems/maximum-subarray/';

const solution1 = `
  其實很單純耶
  因為我一開始看錯題目了，我以為是要求 index

  只是求 continuous subarray 的 max sum 的話

  let max = nums[0], pre = nums[0];
    先把 nums[0] 當成 max -> 預設後面都是負數
    再把 nums[i] 或 pre + nums[i] 來做累積值的比較
    累積的值(pre)＋nums[i] 比較大的話，pre 就繼續累積
  
  pre = Math.max(nums[i], pre + nums[i]);
    若 nums[i] 跟 pre + nums[i] 去比，就能避掉負數的問題
        基本上都會維持 pre + nums[i] 比較大
        nums[i] > pre + nums[i] 的情境只有一個：「 pre 是負數 」

  max = Math.max(pre, max);
    max 原本假設後面都是負數的話，那 nums[0] 自己一個當然最大
    但若 pre + nums[i] 穩定增加的話，max 就會被蓋過去
    如果前面累加值比 nums[i] 還小的話，max 就會重新被定義成自己一個最大
    前面累加了都比不過自己，原因就如同上述：「pre（累加值）是負數」
`;

var maxSubArray = function(nums) {
  let max = nums[0], pre = nums[0];

  for(let i = 1; i < nums.length; i++){
      pre = Math.max(nums[i], pre + nums[i]);
      max = Math.max(pre, max);
  } 
  return max;
};

const kotlinSolution = `
  概念就跟 JS 一樣
  透過 item 與 current 比較，去迭代出 continuous subarray 的最大值

  只是 Kotlin 一樣用 IntArray
  使用 forEach 來寫
    it 應該是 forEach 會待下去的 item
  maxOf 用法同 Math.max
`;

// kotlinSolution
// class Solution {
//   fun maxSubArray(nums: IntArray): Int {
//           var current = 0
//           var max = Int.MIN_VALUE

//           nums.forEach {
//               current = maxOf(current + it, it)
//               max = maxOf(max, current)
//           }

//           return max
//       }
// }