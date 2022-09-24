# [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

My Idea:
Check the smaller node's level and return its parent or itself
- How to find parent node.val(?) -> node.left / node.right = smaller one -> return node.val

## Solution: Iterative

- Check if the p and the q is on the same side.
- If yes, move deeper to that side.
- If no, the node is the LCA.

```js
const lowestCommonAncestor = function(root, p, q) {
  while (root) {
    // Both p & q are in the right part -> move root to the right.
    if (root.val < p.val && root.val < q.val) {
        root = root.right;
    }
    // In contrast, move to the left.
    else if (root.val > p.val && root.val > q.val) {
        root = root.left;
    }
    else {
        // Otherwise, the root is the LCA.
        break; // -> end the while loop and return current root as result.
    }
  }

  return root;
}
```

## Solution: Recursive

### Mine

```js
const lowestCommonAncestor = function(root, p, q) {
  function dfs(node) {
    if (node.val < p.val && node.val < q.val) {
      return dfs(node.right)
    } 
    else if (node.val > p.val && node.val > q.val) {
      return dfs(node.left)
    } else {
      return node;
    }
  }

  return dfs(root)
}
```

### Cleaner
> Actually, we don't need to make another function to do recursive.
```js
const lowestCommonAncestor = function(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  }
  return root;
}
```


