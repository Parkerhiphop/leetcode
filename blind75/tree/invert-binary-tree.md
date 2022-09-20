# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Solution: DFS with Recursion
```js
var invertTree = function(root) {
    if(root) {
        let left = root.left;
        let right = root.right;

        root.right = left;
        root.left = right;

        invertTree(root.left);
        invertTree(root.right);
    }
    
    return root;
};
```

```js
var invertTree = function(root) {
    if (!root) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    return root;
};
```

## Solution: DFS
```js
var invertTree = function(root) {
    const stack = [root];
    
    while(stack.length) {
        const node = stack.pop();
        if (node) {
            [node.left, node.right] = [node.right, node.left];
            stack.push(node.left, node.right);
        }
    }
    
    return root;
};
```

## Solution: BFS
```js
var invertTree = function(root) {
  const queue = [root];

  while (queue.length) {
    const node = queue.shift(); // the first node === root
    if (node) {
      // change node would affect its reference: root.
      [node.left, node.right] = [node.right, node.left];
      queue.push(node.left, node.right);
    }
  }

  return root;
}
```
