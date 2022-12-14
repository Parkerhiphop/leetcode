# [100. Same Tree](https://leetcode.com/problems/same-tree/)

- 只檢查當前 node.val 然後不斷比對完整個數

## DFS
```js
var isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  // Shorter Condition
  // if (!p || !q) return !p && !q;
  // if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

## BFS
- From left to right.
```js
var isSameTree = (p, q) => {
  const queue = [p, q];

  while (queue.length > 0) {
    const first = queue.shift();
    const second = queue.shift();

    if (!first && !second) continue;
    
    if (!first || !second || first.val !== second.val) return false;

    queue.push(first.left, second.left, first.right, second.right); // left and right can switch.
  }

  return true;
}
```
