const mySolution = `
  Using Object (from hash map)
  Use hasOwnProperty to check if (target - nums[i]) = previous number store in object.
  (Use obj[prop] !== undefined is fine.)

  You need to think the loop from i = 1 and i = 2.
  While i = 1, the if condition may not change, but some value be plus or become another value.
  - some value is the obj prop here.

  For example: nums = [3,2,4] and target = 6
  i = 0
    - obj doesn't have any prop, skill the if condition.
    - obj[3] = 0;
    - obj = { 3: 0 };
  i = 1
    - obj doesn't have prop 4 (6 - 2)
    - obj[2] = 1;
    - obj = { 3: 0, 2: 1 };
  i = 2
    - obj has the prop 2 (6-4)
    - return [obj[2], 2] aka [1, 2];
`;

var twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
      if (obj.hasOwnProperty(target - nums[i])) {
          return [obj[target - nums[i]], i];
      }

      obj[nums[i]] = i;
  }
};

const kotlinSolution = `
  Use mutableMapOf, intArrayOf,  IntArray.forEachIndexed
  Check if int exist, return [int, index];
  if not, push the "target - int: index" into IntArray
`;

// class Solution {
//   fun twoSum(nums: IntArray, target: Int): IntArray {
//       val diffMap = mutableMapOf<Int, Int>()
//       nums.forEachIndexed { index, int -> 
//           diffMap[int]?.let { return intArrayOf(it, index) }
//           diffMap[target - int] = index   
//       }
//       return intArrayOf()
//   }
// }
