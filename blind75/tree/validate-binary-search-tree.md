# [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

- Think too much, I should check the discussion after 15 mins.

## Solution: O(n) - DFS & Divide-And-Conquer
```js
var isValidBST = function(root) {
  return validate(root, -Infinity, Infinity);
}

function validate(node, lefter, righter) {
  // empty node or empty tree
  if (node == null) return true;

  if ((lefter < node.val) && (node.val < righter)) {
    // check if all tree nodes follow BST rule
    return validate(node.left, lefter, node.val) && validate(node.right, node.val, righter)
  } else {
    // early reject when we find violation
    return false;
  }
}
```

## Solution: O(n) - BFS
```ts
var isValidBST = function(root) {
    const queue = [[root, -Infinity, Infinity]];
    while (queue.length) {
        const [node, min, max] = queue.shift();
        if (!node) continue;
        if (node.val >= max || node.val <= min) return false;
        
        queue.push([node.left, min, node.val])
        queue.push([node.right, node.val, max])
    }
    return true;
};
```

## First Attempt(Failed)
- only valid the current node.
- Failed Case: `[5,4,6,null,null,3,7]`

```ts
var isValidBST = function(root) {
    function dfs(node) {
        if (!node) return true;
        
        if (node.left) {
            let isLeftValid = dfs(node.left);

            if (node.right) {
                let isRightValid = dfs(node.right);
                return node.right.val > node.val && node.val > node.left.val && isLeftValid && isRightValid;
            }
            
            return node.val > node.left.val && isLeftValid;
        }
        
        if (node.right) {
            let isRightValid = dfs(node.right);

            return node.right.val > node.val && isRightValid;
        }
        
        return true;
    }

    return dfs(root);
};
```
