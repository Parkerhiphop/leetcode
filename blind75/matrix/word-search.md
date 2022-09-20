# [79. Word Search](https://leetcode.com/problems/word-search/)

## Solution: Recursion

- 一個格子能走的方向有「上、下、左、右」
- 在 matrix 像走迷宮一樣把 Word 走出來
- 寫一個 Recursion: go(x, y, k)
  - x, y 就是當前位置; k 則是 word 的位置（即，走到第幾個 letter)
  - 在 Recursion 中把走過的先標記成 `*` ，四個方向都走完後再 reset 回來
    - 不然如果字母重複，就會走到重複的格子
  - 勝利條件：k = word.length - 1 -- 找到所有的 Letter
  - Recursion 繼續條件： `board[x][y] === word[k]` -- 當前的格子 = 下一個要找的 Word Letter

```js
const exist = (board, word) => {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;

  // right, bottom, left, top
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const go = (x,y,k) => {
    if (board[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;

    // mark visited: prevent go duplicate cell
    board[x][y] = '*';

    for(const [dx,dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      // Recursion deeper
      if (go(i, j, k+1)) return true;
    }

    // reset: after go through all direction
    board[x][y] = word[k];

    return false;
  }

  for(let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      // Recursion start
      if (go(i, j, k)) return true;
    }
  }

  return false;
}
```

