const solution = `
  It's more complicated than 2Sum
  The condition is complicated, and we use lots of conditional statements
  - if else, while loop, break, continue

  While the solution set must not contain duplicate triplets.
  And the element of nums may be duplicated.

  So, we sort the array first, since the order of results is not important.
  Then we have to find the i, j, k.
  "i" is the first, so we use it to do the for loop.
  "j" maybe i+1 ~ nums.length - 2, since there's still one result "k".
  "k" is the last, we can find it from end to j. Its initial value is nums.length - 1;
  Then we narrow the range of k and extend the range of "i", "k"

  It only pushes the value one time to prevent duplicates.
`;

var threeSum = function(nums) {
  const results = [];
  
  if (nums.length < 3) return results;
  
  nums = nums.sort((a,b) => a - b);
  
  let target = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > target) break;
      if (i > 0 && nums[i] === nums[i-1]) continue;
      
      let j = i + 1;
      let k = nums.length - 1;
      
      while (j < k) {
          let sum = nums[i] + nums[j] + nums[k];
          
          if (sum === target) {
              results.push([nums[i], nums[j], nums[k]])
              
              while (nums[j] === nums[j + 1]) j++;
              while (nums[k] === nums[k - 1]) k--; 
              
              j++;
              k--;
          } else if (sum < target) {
              j++;
          } else {
              k--
          }
      }
  }
  
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
