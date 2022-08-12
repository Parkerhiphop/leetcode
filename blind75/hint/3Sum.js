const solution = `
  It's more complicated than 2Sum
  The condition is complicated, and we use lots of conditional statements
  - if else, while loop, break, continue

  We can just see the annotation besides code.
  (It's easy understanding than the below description. ><)

  While the solution set must not contain duplicate triplets.
  And the element of nums may be duplicated.

  So, we sort the array first, since the order of results is not important.
  Then we have to find the i, j, k.
  "i" is the first, so we use it to do the for loop.
  "j" maybe i+1 ~ nums.length - 2, since there's still one result "k".
    - noted: j can be the same as i.
  "k" is the last, we can find it from end to j. Its initial value is nums.length - 1;
  Then we narrow the range of k and extend the range of "i", "k"
  
  It only pushes the value one time to prevent duplicates.

  The result will start from smallest i & j and biggest k.
`;

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const results = [];
  
  if (nums.length < 3) return results;
  
  // sort the array first, since the order of triplets does not matter.
  nums = nums.sort((a,b) => a - b);
  
  let target = 0;
  
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

const mySolution = `
  (failed)
  Try the violent solution, and it doesn't work out.
`;

// var threeSum = function(nums) {
//   let answer = [];
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = 1; j < nums.length; j++) {
//           for (let k = 2; k < nums.length; k++) {
//               if (i!==j && i!==k && j !== k) {
//                   let sum = nums[i] + nums[j] + nums[k];
//                   console.log(i,j,k,sum);
//                   if (sum === 0) {
//                       answer.push([nums[i],nums[j],nums[k]]);
//                   }
//               }
//           }
//       }
//   }
//   return answer;
// };

const kotlinSolution = `
  The flow is like the JS.
  Use HashSet, sort function. listOf ...
`;

// var set = HashSet<List<Int>>()
// if(nums.size <= 2) {
//     return set.toList()
// }

// nums.sort()
// for(i in 0 until nums.size - 2) {
//     var low = i + 1
//     var high = nums.size - 1
//     while (low < high) {
//         var sum = nums[i] + nums[low] + nums[high]
//         when {
//             sum == 0 -> {
//                 set.add(listOf(nums[i], nums[low], nums[high]))
//                 low++
//                 high--
//             }
//             sum < 0 -> low++
//             else -> high--
//         }
//     }
// }

// return set.toList()
