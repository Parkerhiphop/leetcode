const source = 'https://leetcode.com/problems/product-of-array-except-self/';

const solution1 = `
  解題概念:
  1.求出該 index 右邊值的乘積
    ex: nums.length = 10, i = 2, -> answer[i] = nums[3] * ... * nums[10]
  2.將 1. 求出來的值再依序乘上 index 左邊的值
    ex: 
  -> 從頭到尾都只乘 左 跟 右，因此就不會乘上自己的值了

  Implement
  1. 定義一個 answer[] 在第一個 loop 記下右邊乘積，第二個 loop 乘上左邊所有的值，即可當作最終答案
  1. 從右邊（尾） for loop 把 index 右側的值相乘，需要定義 right 來記 ｉ 右邊的積
    -> right 初始值是 1，因為最後一個值不會有右側的值可以乘，先定義為 1 等左側的積
    -> 先將 right 賦值給 answer[i]，再把 right 再賦值成 nums[i]
      -> right 需要在給 answer[i] 之後才賦值，以避免 乘到 index 自身
    ex: i = 2, nums.length = 4 -> right = 1 * nums[4] * nums[3]
  2. 從左邊（頭） for loop 把 index 左側的值相乘，由第一個 loop 下來的 answer[] 繼續乘，需要定義 left 來記 i 左邊的積
    -> left 初始值是 1 的概念同 right，因為第一個值不會有左邊的積，所以定義為 1
    -> 先 answer[j] *= left 再 left *= nums[j]
      -> 同 right，需要先乘上 left 再重新把 left 賦值為 nums[j]，以避免乘到 index 自身
`;

const solution2 = 'solution1 的 reduceRight variant';

const solution3 = `
  1. Array(nums.length) + Array.prototype.fill(num) 初始化 answer[]
  2. 多定一個 end = nums.length - 1
  如此就能在同一個 for loop 將左右乘積一起處理了
`;

// solution1
// ex: [2,4,6,8]
var productExceptSelf = function (nums) {
  let answer = [];
  let right = 1;
  let left = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = right;
    right *= nums[i];
  }

  // answer = [1*8*6*4,1*8*6,1*8,1]
  // 至此 answer element 是 index 之右的積

  for (let j = 0; j < nums.length; j++) {
    answer[j] *= left;
    left *= nums[j];
  }

  // answer = [1*8*6*4 * 1, 1*8*6*2, 1*8*4, 1*2]
  // 在此把 answer element 之左的值也乘回來

  return answer;
};

// solution 2
var productExceptSelf = function (nums) {
  let output = [];

  nums.reduceRight((prev, acc, i) => {
    output[i] = prev;
    return prev * acc;
  }, 1);

  nums.reduce((prev, acc, i) => {
    output[i] *= prev;
    return prev * acc;
  }, 1);

  return output;
};

// solution 3
var productExceptSelf = function (nums) {
  let answer = Array(nums.length).fill(1);
  let end = nums.length - 1;
  let right = 1;
  let left = 1;

  for (let i = 0; i < nums.length; i++) {
    answer[i] *= left;
    answer[end - i] *= right;

    left *= nums[i];
    right *= nums[end - i];
  }

  return answer;
};

const ktSolution = `
  概念一樣是先乘右邊，再乘左邊，以此來避開 index
  只是 kt 用 IntArray 來定義 array 然後 nums.size 來定義 array 大小

  但它在同一個 for loop 就讓 output 可以乘上 left & right 的積了！

  IntArray(nums.size) { 1 } 可以創造出 [ 1 x nums.size ] 的陣列 -> 先將 answer 的大小初始化，並都賦值 1
  陣列有了初始值之後，就可以直接開乘
  JS 會需要做兩個 for loop，是因為在累積 右邊乘積時，array 的大小才會出來
  （但其實用 Array() + Array.prototype.fill() 就也能做出 1 x nums.length 的陣列，參見 solution3）
`;

// kotlin solution
// class Solution {
//     fun productExceptSelf(nums: IntArray): IntArray {
//         val output: IntArray = IntArray(nums.size) { 1 }
//         val end: Int = nums.size - 1

//         var left: Int = 1
//         var right: Int = 1

//         for (index: Int in 0 until nums.size) {
//             output[index] *= left
//             output[end - index] *= right

//             left *= nums[index]
//             right *= nums[end - index]
//         }

//         return output
//     }
// }
