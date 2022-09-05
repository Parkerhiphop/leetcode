# [Questions](https://leetcode.com/problems/set-matrix-zeroes/)

## Solution: O(1) Space & O(m * n) Time
```js
var setZeroes = function(matrix) {
    // release m & n for better Space complexity
    let m = matrix[0].length;
    let n = matrix.length;
    
    let track = [];
    
    // find zeroes
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                track.push([i, j])
            }
        }
    }
    
    for (let i = 0; i < track.length; i++) {
        let [x,y] = track[i];
        
        // update row
        for (let j = 0; j < m; j++) {
            matrix[x][j] = 0;
        }
        
        // update column
        for (let j = 0; j < n; j++) {
            matrix[j][y] = 0;
        }
    }

};
```

