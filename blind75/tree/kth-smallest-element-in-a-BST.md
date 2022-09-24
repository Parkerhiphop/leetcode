# [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)


My Idea is right!
> Make a sorted array and return `array[k]`
But I'm still fail to transform my idea to code, lol.


## Solution: DFS
```js
const kthSmallest = function(root, k) {
  let result = [];

  (function dfs(node){
    // If we push the Kth value, we should stop the dfs and return the value.
    if (result.length < k) {
      if (node.left) dfs(node.left); // push from left first.
      result.push(node.val); // finished going left, now start adding values
      if (node.right) dfs(node.right); // if have right, go there and repeat process
    }
  })(root)  

  return result[k - 1]; // index start from 0, so minus 1 here.
}
```

## Solution: BFS
<!-- TODO: Try the queue solution -->
```js
const kthSmallest = function(root, k) {
  let stack = [];
  let node = root;
  let count = 1;

  while (node || stack.length) {
    // push from the left
    while (node) {
      stack.push(node);
      node = node.left;
    }
    // get node from the result
    node = stack.pop();

    // return the Kth node.val
    if (count === k) return node.val;
    else count++;

     console.log(node);
    // stack would store the value lefter than root;
    // while check all value from left, reset the node to its right here. (root.right -> root.right.right, ...)
    node = node.right;
    console.log('after', node)
  }
}
```
