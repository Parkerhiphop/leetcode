# [112. Path Sum](https://leetcode.com/problems/path-sum/)

## Solution: Mine(DFS) - O(n)

- Calculate All Sum and Check if targetSum is included.

```js
const hasPathSum = function(root, targetSum) {
    if (!root) return 0;
    
    let sums = [];
    
    function dfs(node, currentValue) {
        if (!node.left && !node.right) sums.push(currentValue)

        if (node.left) {
            dfs(node.left, currentValue + node.left.val)
        }
        
        if (node.right)  {
            dfs(node.right, currentValue + node.right.val)
        }
    }
    
    dfs(root, root.val);
    
    return sums.includes(targetSum)
};
```

## Solution: Cleaner DFS
```js
var hasPathSum = function(root, sum) {
    if (!root) return false;

    if (!root.left && !root.right) { // check leaf
        return sum === root.val;
    } else { // continue DFS
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};
```
