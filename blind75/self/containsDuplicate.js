const source = 'https://leetcode.com/problems/contains-duplicate/';

const mySolution1 = 'Hash map but use fixed number to return true';

const mySolution2 = 'Hash Map like twoSum';

const kotlin = 'nums.size & nums.toSet().size';

// mySolution1
var containsDuplicate = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    }

    obj[nums[i]] = 1;
  }

  return false;
};

// mySolution2
var containsDuplicate = function (nums) {
  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]] !== undefined) {
      return true;
    }
    numsObj[nums[i]] = i;
  }

  return false;
};

// kotlin
// class Solution {
//     fun containsDuplicate(nums: IntArray): Boolean {
//         return nums.size > nums.toSet().size
//     }
// }

/** @kotlinNotes */
// intArray.size() : get the size of array
// intArray.toSet() : IntArray -> Set, Set is readonly and non-duplicate, unOrder collection
// intArray.toSet().size() : get the size of Set
// mutableSet -> literally mutable set.(not readonly)
