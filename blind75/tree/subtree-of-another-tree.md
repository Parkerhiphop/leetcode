# [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

## Solution: DFS by myself
- Better way is remove the `match` and return it from dfs function.
```ts
const isSubtree = function(root, subRoot) {
  let match = true;

  // maybe `dfs` is better.
  function check(node) {
    if (isSameTree(node, subRoot)) {
      match = true;
      return;
    }

    if (node.left) check(node.left) 
    if (node.right) check(node.right) 
  }

  check(root);

  return match;
}

/** Better */
// Without match
const isSubtree = function(root, subRoot) {
  const dfs = (node) => {
    if (!node) return false;
    if (isSameTree(node, subRoot)) return true;
    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
}


function isSameTree(p, q) {
  if (!p || !q) return !p && !q;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
```

## Solution: BFS by myself
```js
const isSubtree = function(root, subRoot) {
    const queue = [root];
    
    while(queue.length) {
        const node = queue.shift();

        // Better
        // if (!node) continue;
        
        if (isSameTree(node, subRoot)) return true;
        
        // Better to check if node above and just push here.
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        // queue.push(node.left, node.right)
    }
    
    return false;
};

function isSameTree(p, q) {
    const queue = [p, q]

    while (queue.length) {
        const first = queue.shift()
        const second = queue.shift()
        
        if (!first && !second) continue;
        
        if (!first || !second || first.val !== second.val) return false;
        
        queue.push(first.left, second.left, first.right, second.right)
    }
    
    return true;
}
```

## [Hybrid](https://leetcode.com/problems/subtree-of-another-tree/discuss/1479754/JavaScript-or-98-Solutions-for-BFS-and-DFS)
```js
const isSubtree = (root, subRoot) => {
  const isSameTree = (p ,q) => {
    if (!p || !q) return !p && !q;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)    
  }

  const queue = [root];
  while(queue.length) {
    const node = queue.pop();
    if (!node) continue;
    if (isSameTree(node, subRoot)) return true;
    queue.push(node.left, node.right);
  }

  return false;
}
```
