# [48. Rotate Image](https://leetcode.com/problems/rotate-image/)

## Solution: Not fully comprehend
> https://leetcode.com/problems/rotate-image/discuss/1175496/JS-Python-Java-C%2B%2B-or-Easy-4-Way-Swap-Solution-w-Explanation

1. depth = ~~(n/2)
2. len?
3. opp?

```js
var rotate = function(matrix) {
    let n = matrix.length, depth = ~~(n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            let temp = matrix[i][i+j]
            matrix[i][i+j] = matrix[opp-j][i]
            matrix[opp-j][i] = matrix[opp][opp-j]
            matrix[opp][opp-j] = matrix[i+j][opp]
            matrix[i+j][opp] = temp
        }
    }
};
```

## Solution: Transpose & Reverse Each Row

1. Transpose: make column to row
   - 作法其實就是移到對角線
   - ex: `[[1 ,2 ,3],[4,5,6],[7,8,9]]`
     - after transpose: `[[ 1,4,7 ], [2,5,8 ], [3,6,9 ]]`
2. Reverse each row
   - 同一行的左右互換 1->3, 3->1
   - `[[7,4,1],[8,5,2],[9,6,3]]`

```js
var rotate = function(matrix) {
    for (let i=0;i<matrix.length;i++) {
        for (let j=i;j<matrix[0].length;j++) {
            // 紀錄原本的值
            let temp = matrix[i][j];

            // 原本的值移到對角線
            matrix[i][j] = matrix[j][i];

            // 對角線的值取原本的值
            matrix[j][i] = temp;
        }
    }

    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length/2;j++) {
            // 一樣紀錄原本的值
            let temp = matrix[i][j];

            // 對調 row 只要動 j 的位置就好
            // i,j -> i, n - j - 1
            // i, n - j - 1 = i, j （因為陣列會變動，才需要 temp 來紀錄）
            matrix[i][j] = matrix[i][matrix[0].length-j-1];
            matrix[i][matrix[0].length-j-1] = temp;
        }
    }
}
```

## My solution
> 沒有遵守 constraint: DO NOT allocate another 2D matrix and do the rotation 的規則
- 遇到 array deep copy 問題，現行的唯一解好像是用 JSON parse + stringify，但 leetcode 似乎不支援 JSON
- 後來發現有 recursion 的作法可以把 shallow 變成 deep copy

```js
var rotate = function(matrix) {
    const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

    let n = matrix.length;

    const ans = clone(matrix);

    // (X)shallow copy: 動 matrix 改到 ans
    // const ans = Object.assign([],matrix);

    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let current = ans[n-j-1][i]
            matrix[i][j] = current;
        }
    }
};
```
