# [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

## [Solution: DFS with Great Explanation](https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/982696/JavaScript-O(n)-time-greater-Easy-to-Understand-with-explanation)
```js
var maxPathSum = function(root) {
    let max = -Infinity

    const findSums = (node) => {
        if (!node) return 0;
        
        // DFS
        let leftSum = findSums(node.left), // update max once
            rightSum = findSums(node.right), // update max twice
            allSum = node.val + leftSum + rightSum
            leftNodeSum = node.val + leftSum
            rightNodeSum = node.val + rightSum
        
        // update max
        // Max is all possible combinations
        max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum)
        
		    // Return the MAX path, which can be node.val, left + node.val, or right + node.val
        return Math.max(node.val, leftNodeSum, rightNodeSum);
    }
    
    findSums(root);
    
    return max;
}
```


## [Solution: Cleaner DFS](https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/2040330/O(n)timeBEATS-99.97-MEMORYSPEED-0ms-MAY-2022)

```js
var maxPathSum = function(root) {
    let max = -Number.MAX_VALUE;

    getMaxSum(root);

    return max;

    function getMaxSum(node) {
      if (!node) return 0;
      let leftSum = getMaxSum(node.left);
      let rightSum = getMaxSum(node.right);
      max = Math.max(max, node.val + leftSum + rightSum);
      return Math.max(0, node.val + leftSum, node.val + rightSum);
    }
}
```

Why is `0` of `Math.max(0, node.val + leftSum, node.val + rightSum)` required?
  - if `node.val + leftSum`, `node.val + rightSum` are negative values, you don't want to include them in your path.
  - The negative values would filter by 0.


Why don't need to check node.val, leftNodeSum and rightNodeSum above?
  - if `node` doesn't have left or right, the `node.val + leftSum` and `node.val + rightSum` would be `node.val`.

The recursion process of `[2,1,-3]`
```js
node = 2
// enter getMaxSum(node.left = 1)
max = 0 vs 1 + 0 + 0
return leftSum = 1 (0 vs 1 + 0 vs 1 + 0)
// enter getMaxSum(node.right = -3)
max = 1 vs -3 + 0 + 0 = 1
return rightSum = 0 (0 vs -3 + 0, -3 + 0)
// the root gerMaxSum
max = 2 vs 2 + 1 + 0 = 3
return 3 (0 vs 2 + 1 vs 2 + 0) -> useless. Because we only need to return max, not the result of getMaxSum.
```
