/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // Fill the matrix, with undefined values
  // 做出 n x n 的陣列
  const matrix = [...Array(n)].map(() => Array(n));

  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // top
  ];

  // 會走的步驟是 右上 左上 右下 左上 ...
  // 會走的步數是 n n-1 ex: 3x3 -> 右 3 下 2, 左 2 上 1,...
  const steps = [n, n - 1];

  let currentNum = 1;
  let currentDirection = 0; // 代表現在是往哪個方向走

  let currentRow = 0;
  let currentCol = -1;

  while (steps[dir % 2] > 0) {
    // for loop 功用在於把每一個子陣列補完
    for (let k = 0; k < steps[dir % 2]; k++) {
      // 這樣寫就可順著題目的箭頭方向來累加值
      // 關鍵在於找出個方向＋值的規律

      // currentRow 對應到 directions 每一 row 的 index 0
      // 根據方向的不同，會讓一個值是恆等於 0 還是一直加上去
      currentRow += directions[currentDirection][0]; // i = 0 -> 0 + 0 + 0 + 0 + ...
      // currentCol 對應到 directions 每一 column 的 index 0
      currentCol += directions[currentDirection][1]; // j = -1 -> -1 + 1 + 1 + 1 + 1 + ...

      // 一次 for loop 把一個子陣列的加完
      matrix[currentRow][currentCol] = currentNum;
      // 從 [0][0] = 1 開始
      currentNum++; // 每執行一次就++
      // 可寫成 matrix[currentRow][currentCol] = currentNum; ：這行是先賦值，再計算 num
    }

    // 跳出 for loop 代表一個步驟的完結，所以可以往下一個步驟走
    steps[currentDirection % 2]--; // 這樣才能照著 n n-1 n-1 n-2 n-2 n-3 ... 的規律去走路
    currentDirection = (currentDirection + 1) % 4; // 直接%4 的話就是原本的方向，加一後才會是下一個方向
    // %4 的原因是因為可以對應到 0 1 2 3 的餘數 aka directions[0~3]，ex: 0: 右 1: 左
  }

  return matrix;
};
