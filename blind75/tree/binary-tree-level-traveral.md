# [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## Solution: BFS
- [Explanation](https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/1219328/JS-Python-Java-C%2B%2B-or-Easy-BFS-Queue-Solution-w-Explanation)
- [Explanation with chart](https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/472672/Javascript-Detailed-line-by-line-solution)
```js
var levelOrder = function(root) {
    let result = [], level = 0, queue = [root];
    
    // queue[0] means node.val is valid
    while(queue[0]) {
        // row = level
        let count = queue.length, row = []
        for (let i = 0; i < count; i++) {
            let node = queue.shift()
            row.push(node.val)
            // from left to right, push the value to n.
            if (node.left) queue.push(node.left) // next for loop: row.push(node.left.val)
            if (node.right) queue.push(node.right) // after push left, row.push(node.right.val)
            // 1st -> row = [node.val]
            // 2nd and deeper -> row = [node.left, node.right, node.left, node.right, ...]
        }
        result.push(row)  
    } 
    
    return result;
};
```

## Solution: Mine (Failed)

- Right Direction, but fail while iterating the each level of result.

```js
var levelOrder = function(root) {
    let result = [], level = 0, queue = [root];
    
    while(queue.length) {
        result[level] = []
    
        for (let i = 0; i < queue.length; i++) {

            const node = queue.shift();
            console.log('node', node);
            console.log('queue', queue);
            if (node) {
                console.log('result', result);
                // if (result[level].length <= level) {
                    result[level].push([node.val]);                    
                // }
                queue.push(node.left, node.right)
            }
        }
        level++;
    } 
    
    return result;
};
```
