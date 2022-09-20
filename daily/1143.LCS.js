/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  const m = text1.length;
  const n = text2.length;

  // 製作 DP Table -> m+1 * n+1
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  // DP 查表的方式找出 LCS
  // 二維陣列 = Double loop
  // 從 [1,1] 開始走
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let curText1Value = text1.charAt(i - 1); // index
      let curText2Value = text2.charAt(j - 1); // index
      if (curText1Value !== curText2Value) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // 上 or 左
      } else {
        dp[i][j] = dp[i - 1][j - 1] + 1; // 左上方的值
      }
    }
  }

  return dp[m][n]; // 最右下的值就是 LCS 的值
};

console.log(longestCommonSubsequence('abcde', 'ace'));

/**
 * @TypeScript
 */
// TypeScript
// function longestCommonSubsequence(text1: string, text2: string): number {
//   const m: number = text1.length;
//   const n: number = text2.length;

//   const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n+1).fill(0))

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       let curText1Value: string = text1.charAt(i - 1);
//       let curText2Value: string = text2.charAt(j - 1);
//       if (curText1Value !== curText2Value) {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       } else {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       }
//     }
//   }

//   return dp[m][n];
// };

/** @Kotlin */
// class Solution {
//   fun longestCommonSubsequence(text1: String, text2: String): Int {
//       val len1 = text1.length
//       val len2 = text2.length

//       val dp = Array(len1 + 1){ IntArray(len2 + 1) { 0 }}

//       for(idx1 in 1..len1){
//           for(idx2 in 1..len2){
//               dp[idx1][idx2] =  if(text1[idx1 - 1] == text2[idx2 - 1]){
//                   dp[idx1 - 1][idx2 - 1] + 1
//               }else{
//                   maxOf(dp[idx1 - 1][idx2], dp[idx1][idx2 - 1])
//               }
//           }
//       }

//       return dp[len1][len2]
//   }
// }
