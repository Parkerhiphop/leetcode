const solution = `
  Since nums[] would range from 0 ~ n, but miss one number in the middle.
  We could construct a new array with the sizes of nums.length + 1, and fill its value with '-1'
  Why + 1? -> We fill the position of missing number.
  We loop nums and replace the new array's value with element of nums.
  Finally, we could find the one which doesn't replace by element of nums. (the index of the only '-1' in new array.)
`;

var missingNumber = function(nums) {
  // Construct array of size n+1.
  // why n+1 ?
      // To leave a spot for the missing element.
// Assign each val to -1 so we can see which position was not filled
  
  const fullNums = Array(nums.length+1).fill(-1);
  
  // O(n)
  // for...of loops only element
  // "sort" the elements by assigning them to the array based on val
  for(const num of nums) {
      // Why could it sort?
      // Although '3' in nums may not be in the right position(nums[2])
      // The elements of nums is from 0 ~ n, and miss one number.
      // Which means if n = 4, and nums miss 3, nums would be [0,1,2,4], but ordered.
      // So, it's ok to put 2 in nums[2] if 2 exists.
      // We replace the element of fullNums with nums and by order.
      fullNums[num] = num;
  }
  
  // if there's any element is '-1', it would be the missing number.
  return fullNums.indexOf(-1)
};
