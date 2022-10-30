# 1293. Shortest Path in a Grid with Obstacles Elimination

## [Solution: BFS](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/discuss/906849/Javascript-BFS-with-explanation-and-comments)

```js
const shortestPath = function(grid, k) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length, cols = grid[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const visited = new Set();
  visited.add(`0-0-${k}`);

  let moves = 0, queue = [[0,0,k]]; // Starting coordinates and k

  while (queue.length > 0) {
    let nextMoves = [];

    while (queue.length > 0) {
      let [x, y, remainingK] = queue.pop();

      if (x === rows - 1 && y === cols - 1) return moves; // Reach destination

      for (const direction of directions) {
        let row = x + direction[0], col = y + direction[1];

        // Check for out of bounds or too mant ovbstacles to elimiate
        if (
          row < 0
          || col < 0
          || row >= rows
          || col >= cols
          || (grid[row][col] === 1 && remainingK === 0)
        ) continue;

        // Consider a decremented k while discovering next 4 neighbors if obstacle
        let newK = grid[row][col] === 1 ? remainingK - 1 : remainingK;
        let key = `${row}-${col}-${newK}`;

        if (!visited.has(key)) {
          visited.add(key);
          nextMoves.push([row, col, newK])
        }
      }
    }

    queue = nextMoves;
    moves++;
  }

  return -1; // if no path found
}
```
