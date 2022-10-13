# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

## [Solution: DFS](https://leetcode.com/problems/number-of-islands/discuss/429842/JavaScript-DFS-Commented-Thought-Process-Beats-100-Time-and-Space)
- TC: O(m * n)
- SC: O(m * n)  
  - if the entire grid is one island, it will take up m*n space in function call stack.

```js
const numIslands =  (grid) => {
	let count = 0 // the counted islands
	//Go though each cell of the 2d array/grid 
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] == '1') {
              count++
              explore(row, col, grid)
          }
      }
  }
    return count
}


// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function explore(row, col, grid){
    //Let's return IF
    // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
    if (row < 0
      || col < 0
      || row >= grid.length
      || col >= grid[row].length
      || grid[row][col] === '0') {
        return;
    }
    
    //Otherwise, we should explore it!
    //First let's set the current spot to "0"
    grid[row][col]='0'
    
	//Possibilites:
	// 1) 1 to the right, left, top, bottom
	//right
	explore(row, col+1, grid)   
    //Left
	explore(row, col-1, grid)  
    //Down
	explore(row+1, col, grid) 
    //Up
	explore(row-1, col, grid)   
}
```

### Steps
1. Mark the current start/visited parts of the islands as visited by turning them into a 0,
2. explore all the adjacent possibilities,
  - If one of them is a 1, recursively turn it into a 0 and check its children.
3. Once we are done, we should have gotten rid of the island that we discovered and can move on to the next island (if it exists in the grid)


## Solution: BFS
- TC: O(m * n)
- SC: O(m * n)
  - queue might contain m*n elements if the entire grid is one island

```js
const numIslands = function(grid) {
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == "1") {
                count++;
                bfs([[row,col]], grid);
            }
        }
    }
    return count;
}

function bfs(queue, grid) {
  const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
  while (queue.length > 0) {
      let [row, col] = queue.shift();
      if (row < 0
        || row >= grid.length
        || col < 0
        || col >= grid[0].length 
        || grid[row][col] == '0') continue;

      grid[row][col] = "0"; // mark so that we know we already visited it

      for (let dir of [[-1,0],[0,1],[1,0],[0,-1]]) {
          queue.push([row+dir[0], col+dir[1]]);
      }
  }
}
```

