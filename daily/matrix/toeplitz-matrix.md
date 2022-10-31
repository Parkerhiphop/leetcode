# [766. Toeplitz Matrix](https://leetcode.com/problems/toeplitz-matrix/)

## Solution: O(m x n)
```js
var isToeplitzMatrix = function(matrix) {
    for (let m = 0; m < matrix.length - 1; m++) {
        for (let n = 0; n < matrix[0].length - 1; n++) {
            if (matrix[m][n] !== matrix[m+1][n+1]) return false;
        }
    }
    
    return true;
};
```

## Solution: O(n^2)
- a for loop and then the .join()
```js
var isToeplitzMatrix = function(matrix) {
    for (var i = matrix.length - 1; i>0; i--) {
        if(
          matrix[i].slice(1, matrix[i].length).join('')
          !== matrix[i-1].slice(0, matrix[i].length - 1).join('')
          ) {
            return false;
        }
    }
    return true;
};
```
