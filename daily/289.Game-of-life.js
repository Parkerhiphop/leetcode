/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
 * @note
 * 第一次的想法太天真了，以為攤平就可以解，但沒考慮到在邊邊的格子情況無法適用，因為不會加到下一列的第一個
 * 但對於 neighbor cell 的計算是 m: -1~1 n: -1~1 這邊有觀察出來（給自己一個讚）
 */

var gameOfLife = function (board) {
  /** @solution O1 */
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let cell = board[i][j];
      let neighbors = getNeighbors(i, j, board);
      // dead cell rule
      if (cell == 0 && neighbors == 3) {
        board[i][j] = 2; // 一樣是為了避免影響到下一格的計算
        // 因為在 neighbor 的計算是 1 才會＋＋
        // 所以在這邊用 2 就不會再下一輪被誤加
      }
      // live cell rule
      if (cell == 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = -1;
        // 因為在 neighbor 的計算是 1 才會＋＋
        // 所以在這邊用 -1，再下一輪計算時再補上 abs 就能加起來！
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == -1) board[i][j] = 0;
      if (board[i][j] == 2) board[i][j] = 1;
    }
  }
};

var getNeighbors = function (r, c, board) {
  let radius = [-1, 0, +1], // 一樣運用 -1~1 的概念去算
    count = 0;
  // 要取到二維矩陣中的值，看來還是只能用 double for
  for (let i = 0; i < radius.length; i++) {
    for (let j = 0; j < radius.length; j++) {
      // 確認 row 存在，且不是自己（i=0&&j=0）時是自己
      if (!(radius[i] == 0 && radius[j] == 0) && board[r + radius[i]] != null) {
        let neighbor = board[r + radius[i]][c + radius[j]]; // 跑 i:-1~1 j:-1~1 的所有值
        if (Math.abs(neighbor) == 1) count += 1; // live cell 時才計數
      }
    }
  }
  return count;

  // /** @solution */
  // // 這樣算分數，比攤平合理很多
  // var checkNeighbors = function (row, col) {
  //   // 先 - 是因為要剪掉自己才等於周遭的總和
  //   var score = -board[row][col];
  //   var r, c;
  //   // 行跟列都是取前後的
  //   // 看來這邊還是得用雙重陣列
  //   for (r = row - 1; r <= row + 1; r++) {
  //     // -1~1
  //     for (c = col - 1; c <= col + 1; c++) {
  //       // -1~1
  //       // 確認 row 跟 cell 存在（沒有超出範圍）
  //       if (
  //         typeof board[r] !== 'undefined' &&
  //         typeof board[r][c] !== 'undefined'
  //       ) {
  //         // abs -> 絕對值
  //         // 難怪這邊要用 floor，因為鄰居可能會變成 0.5/-0.5
  //         // ＋之前用絕對值的原因是 -0.5 = 原本是 1 但變成 0
  //         console.log('check', board[r][c]);
  //         score += Math.abs(Math.floor(board[r][c]));
  //       }
  //     }
  //   }
  //   console.log('score', score);
  //   return score;
  // };

  // var r, c;
  // // 跑一遍所有 row
  // for (r = 0; r < board.length; r++) {
  //   // 再每個 row 裡跑一遍每個 cell
  //   for (c = 0; c < board[0].length; c++) {
  //     var score = checkNeighbors(r, c);
  //     // live cell rule
  //     if (board[r][c] === 1) {
  //       if (score < 2 || score > 3) {
  //         // -0.5 是為了避免影響到後面的計算
  //         // 因為原本是 1 所以用 -0.5
  //         // 純 ceil 時是 0，可用於最後 return
  //         // abs 之後是 1，可用於下一格的 cell 計算
  //         //（想到這招好猛啊）
  //         board[r][c] = -0.5;
  //       }
  //     }
  //     // dead cell rule
  //     else if (board[r][c] === 0) {
  //       if (score === 3) {
  //         board[r][c] = 0.5;
  //       }
  //     }
  //   }
  // }

  // for (r = 0; r < board.length; r++) {
  //   for (c = 0; c < board[0].length; c++) {
  //     console.log('final', board[r][c]);
  //     board[r][c] = Math.ceil(board[r][c]);
  //   }
  // }
};
