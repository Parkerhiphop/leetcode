const source = 'https://leetcode.com/problems/two-sum/submissions/';

const solution1 = 'Hash map / O(n)';

const solution2 = 'Use Map Object / O(n)';

const mySolution = 'Use two for loop / O(n*n)';

// solution1
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[target - num] !== undefined) {
      return [hash[target - num], i];
    }
    hash[num] = i;
  }
};

// solution2
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
