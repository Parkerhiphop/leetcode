const solution = `
    Use binary search and while loop.
    Understanding the rules of the rotated sorted array is that always one side of the array is sorted.
    Then we can find out where the target is during the while loop.
    The condition to break is that left meet right or left + 1 = right.
`;

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // Loop to situation: [left,mid,right]
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Loop to situation: [left,mid,right]
        if (nums[mid] === target) {
            return mid;  
        } 
        
  // When dividing the roated array into two halves, one must be sorted.

      // left is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                // target is in the left (left ~ middle - 1)
                right = mid - 1;
            } else {
                // target is in the right (middle + 1 ~ right)
                left = mid + 1;
            }
        } else {
            // right is sorted
            if (nums[mid] <= target && target <= nums[right]) {
                // target is in the right
                left = mid + 1;
            } else {
                // target is in the left
                right = mid - 1;
            }
        }
    }
    
    return -1;
    };

const mySolution = `
    (failed)
    試圖找出 target 與 Binary Search 的互動過程，以及如何判斷他所在區間的 if/else
    但成功判斷出來後，不知道如何用迴圈的方式去迭代他，讓他成為 left or right 之類的值 QQ
`;
var search = function(nums, target) {        
  // 步驟
  // 1. 找出 target 在二分法的哪一邊
  // 2. 持續限縮到只剩 [left, middle, right]
  // 3. 若 target 不在這之中，代表不存在，回傳 -1
      // 情境：target > right, target < left
  // 4. 若非上述情況，回傳 target index


  // 先判斷當前 array 的狀態(rotated?)
  // 再判斷要往哪邊去找 target
  // 思路應該是要單邊限縮
    while (target < nums[right] || target > nums[left]) {
        if (nums[middle] > nums[right]) {
            // target 比 left 小的話，介於 middle + 1 ~ right
            // 反之，介於 left ~ middle - 1
            if (nums[target] > nums[right]) {
                right = middle;
            } else {
                left = middle + 1;
            }
        } else {
            if (nums[left] > nums[middle]) {
                // target 比 left 大的話，介於 left ~ middle - 1 之間
                // 反之，介於 middle + 1 ~ right
            } else {
                // target 比 middle 大的話，介於 middle + 1 ~ right 之間
                // 反之，介於 left ~ middle - 1
            }
        }
    }
        
    if (nums[right]) return right;
    
    if (nums[left]) return left;

    return -1;
};

const kotlinSolution = `
    大同小異，只是把值累積在 start 最後才做判斷 return start or -1
    而剛好在中間的情況，在 while loop 就會先 return 出來
`;

// class Solution {
//   fun search(nums: IntArray, target: Int): Int {
//       var start = 0
//       var end = nums.size - 1
//       while (start < end) {
//           var mid = (end + start) / 2
//           if (nums[mid] == target) {
//               return mid
//           } else if (nums[start] <= nums[mid]) {
//               if (nums[start] <= target && target <= nums[mid]) {
//                   end = mid - 1
//               } else {
//                   start = mid + 1
//               }
//           } else {
//               if (nums[mid] <= nums[end]) {
//                   if (nums[mid] <= target && target <= nums[end]) {
//                       start = mid + 1
//                   } else {
//                       end = mid - 1
//                   }
//               }
//           }
//       }
//       return if (nums[start] == target) start else -1
//   }
// }