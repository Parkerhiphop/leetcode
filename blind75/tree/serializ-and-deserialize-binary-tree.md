# [297. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

## Solution: DFS
```js
function serialize(root) {
  let data = [];

  function go(node) {
    if (!node) {
      data.push(null)
      return;
    }

    data.push(node.val)
    go(node.left)
    go(node.right)
  }

  go(root);

  return data;
}

function deserialize(data) {
  
  function go() {
    if (data.length === 0) return;

    const val = data.shift();

    if(val == null) return null;

    const node = new TreeNode(val);
    node.left = go();
    node.right = go();
    
    return node;
  }

  return go();
}
```

## Solution: BFS
```js
function serialize(root) {
  let stack = [], data = [];

  if (root == null) return [];

  stack.push(root);

  while(stack.length > 0) {
    let node = stack.shift();

    data.push(node ? node.val : null);

    if (node) {
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return data;
}

function deserialize(data) {
  if (data[0] == null) return null;

  let node = new TreeNode(data.shift());
  let stack = [node];

  while (stack.length > 0) {
    let node = stack.shift();

    left = data.shift();
    right = data.shift();

    node.left = (left == null) ? null : new TreeNode(left);
    node.right = (right == null) ? null : new TreeNode(right);

    if (node.left != null) stack.push(node.left);
    if (node.right != null) stack.push(node.right);
  }

  return node;
}
```
