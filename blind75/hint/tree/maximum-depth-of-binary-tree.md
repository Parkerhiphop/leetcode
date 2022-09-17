# [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

```
[3,9,20,null,null,15,7]
[3,9,20,null,null,15,7, 32, null, null, 19, null, null, null, 10]
[1,2]
[3,9,20,1,5,6,2,7,8,11,21]
[3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]
```

## Solution: DFS
Add value bottom up
- The deepest is 0.
- The n layer = maxDepth - n.
- The top is the maxDepth.

```js
var maxDepth = (root) => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
```

## Solution: BFS

- Level Order (Top down)
- From right to left.
- More Efficient(?)

```js
var maxDepth = function(root) {
    if(!root) return 0;
    // using BFS and counting levels
    // not recommended to use array as queue
    let levels = 0, queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        let count = queue.length;
        
        // continue divide b-tree to [right, left]
        for(let i = 0; i < count; i++){
            const node = queue.shift();

            // pop up right first, if right is null, pop up left.
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
        }

        // after pop up the current right and left
        levels++;
    }
    return levels;
};
```

## My Solution(Failed)
```js
var maxDepth = function(root) {
    // detect the leftest or rightest.
    // fail when the deepest is in the middle.
    
    let left = 0;
    let right = 0;

    const isLeftExist = (node) => {
        if (node) {
            left++;
            if (node.left) {
                return Math.max(left, isLeftExist(node.left));
            } else {
                return Math.max(left, isLeftExist(node.right));
            }
        }
        
        return left;
    }
    
    const isRightExist = (node) => {
        if (node) {
            right++;
            if (node.right) {
                return Math.max(right, isRightExist(node.right));
            } else {
                return Math.max(right, isRightExist(node.left));
            }
        }
        
        return right;
    }
    
    const leftest = isLeftExist(root);
    
    const rightest = isRightExist(root);


    return Math.max(leftest, rightest);
}
```
