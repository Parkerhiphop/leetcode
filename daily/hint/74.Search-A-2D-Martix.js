/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @Concept
 * matrix[0~m][n] ， 找到 target 在哪個陣列，再去 loop 那個陣列
 */
var searchMatrix = function (matrix, target) {
  /**
   * @First
   * 👑 97.34%  ＆ 16.10%~30.67%
   */
  // const m = matrix.length;
  // const n = matrix[0].length;

  // if (n === 1) {
  //   for (let i = 0; i < m; i++) {
  //     if (target === matrix[i][0]) {
  //       return true;
  //     }
  //   }
  // } else {
  //   let targetM = 0;
  //   for (let i = 0; i < m - 1; i++) {
  //     if (target === matrix[i][n]) {
  //       targetM = i;
  //       return;
  //     }

  //     if (target > matrix[i][n - 1]) {
  //       targetM++;
  //     }
  //   }

  //   for (let i = 0; i < n; i++) {
  //     if (target === matrix[targetM][i]) {
  //       return true;
  //     }
  //   }
  // }

  // return false;

  /**
   * @Second
   * 可讀性較高的版本，但效能有點差
   */
  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return false;
};

/**
 * @Kotlin
 * 一樣是
 */

// class Solution {
//   fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
//       val m = matrix.size
//       val n = matrix[0].size

//       var i = 0
//       var j = n - 1
//       // i = m - 1 -> 最高層的矩陣
//       // j = -1 -> 陣列裡的值都比較完了，最小的是 arr[0]，所以最後會被扣到 -1
//       while (i < m && j > -1) {
//           val num = matrix[i][j]
//           if (num == target) {
//                return true
//           }

//           if (target > num) {
//               i += 1 // 可以＋到確認是哪一列
//           } else {
//               j -= 1 // 知道哪一列後，再去看是哪一行
//           }
//       }

//       return false
//   }
// }
