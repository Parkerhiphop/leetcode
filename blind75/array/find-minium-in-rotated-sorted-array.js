const solution = `
  Binary Search
  只需要設定 left 跟 right
  middle 在 while 中設定就好，如果是 ascendent 的重點是找到左邊的

  概念：切一半，看左右哪邊小，因為是升冪，右邊一定要比左邊大，沒有的話就代表在邊界，而此時最小值就是邊界 + 1
  一定是往右切，因為是升冪，所以不用考慮有 rotate 的情況，最小值在 middle's left 的可能
  最終目標就是 left & right 就在旁邊，這時候依照升冪原理，left 就是答案

  使用 "~~"（double NOT bitwise operator）
    功用是「去除 number 的小數點，而且不會回傳 NaN，頂多只會回傳 0」
    vs Math.floor ：一個是回傳最小，一個是去除小數點
    -> ex: -5.5 : -6 vs -5
`;

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    // 得出 二分 的 index aka middle
    const middle = ~~((left + right) / 2);
    // middle > right 時，代表 middle 是 rotated 的邊界
    // left = middle + 1 -> 邊界 + 1 即是最小值
    if (nums[middle] > nums[right]) left = middle + 1;
    // 前面 left 剛等於 middle + 1
    // 這邊 right = middle，會讓 left > middle 進而跳出 while loop
    else right = middle;
  }
  return nums[left];
};

const mySolution = `
  (failed)
  有想出是要用 Binary！
  但是沒想到怎麼用 JS 去實作 Binary Search QQ
  設定了 center, left, right, min 等太多變數把事情搞得太複雜惹
`;

var findMin = function(nums) {
  let center = Math.ceil(nums.length / 2);
  let left = center - 1;
  let right = center + 1;
  let min = 0;

  while (nums[center] > nums[left] || nums[center] > [right]) {
      min = Math.min(nums[left], nums[center], nums[right]);
      
      if (min === nums[left]) {
          center = Math.ceil(center / 2);
      }
      
      if (min === nums[right]) {
          center = Math.ceil(center / 2) + center;
      }
      
      left = center - 1;
      right = center + 1;
  }

  return nums[center];
};

const kotlinSolution = `
  完全照抄 JS ，只是寫法有點不一樣
  mid 不知道為何不用像 JS 那樣用 ~~ 就可以了（？）
`;

// class Solution {
//   fun findMin(nums: IntArray): Int {
//       var left = 0
//       var right = nums.size - 1
//       while (left < right) {
//           var mid = (right + left) / 2
//           if (nums[mid] > nums[right]) left = mid + 1;
//           else right = mid;
//       }
//       return nums[left];
//   }
// }
