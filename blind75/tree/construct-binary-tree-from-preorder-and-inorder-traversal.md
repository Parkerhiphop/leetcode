# [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

<!-- TODO: Review again -->
## [Solution: Simple without map](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/34543/Simple-O(n)-without-map)
```js
var buildTree = function(preorder, inorder) {
    p = i = 0;
    build = function(stop) {
        if (inorder[i] != stop) {
            var root = new TreeNode(preorder[p++])
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    
    return build()
};
```

## Solution: DFS - [Easy Recursive Solution w/ Explanation](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/1258712/JS-Python-Java-C%2B%2B-or-Easy-Recursive-Solution-w-Explanation)

```js
var buildTree = function(P, I) {
    let M = new Map()
    for (let i = 0; i < I.length; i++)
        M.set(I[i], i)
    return splitTree(P, M, 0, 0, I.length-1)
};

var splitTree = function(P, M, pix, ileft, iright) {
    let rval = P[pix],
        root = new TreeNode(rval),
        imid = M.get(rval)
    if (imid > ileft)
        root.left = splitTree(P, M, pix+1, ileft, imid-1)
    if (imid < iright)
        root.right = splitTree(P, M, pix+imid-ileft+1, imid+1, iright)
    return root
}
```

## Solution: BFS
As with most binary tree traversals, lends itself particularly well to a DFS approach, of course. 
```js
var buildTree = function(preorder, inorder) {
    // Map the inorder values to their index for easy lookup,
    // otherwise we'll have to do an O(N) find each time,
    // and this solution becomes O(N^2) instead of O(N)
    let imap = new Map()
    for (let i = 0; i < inorder.length; i++)
        imap.set(inorder[i], i)
    
    // Use a dummy node as the initial "parent" of the root
    let q = new Queue(),
        dummy = new TreeNode()
    
    // The queue will have to store the current node val,
    // the parent and which side to which the new node
    // will need to be attached, and the inorder
    // endpoint indexes of the node's subtree range
    q.enqueue([0, dummy, "left", 0, inorder.length - 1])
    while (!q.isEmpty()) {
        // Build the node and attach it to the parent
        let [poix, par, side, iostart, ioend] = q.dequeue(),
            curr = preorder[poix], iomid = imap.get(curr),
            node = new TreeNode(curr)
        par[side] = node
        
        // Use the location of the current node val in inorder (iomid)
        // to determine if there is a left and/or right subtree present,
        // then add them to the queue if they exist
        if (iomid > iostart)
            q.enqueue([poix + 1, node, "left", iostart, iomid - 1])
        if (iomid < ioend)
            q.enqueue([poix + 1 + iomid - iostart, node, "right", iomid + 1, ioend])
    }
    
    // Strip off the root from the dummy and return it
    return dummy.left
};
```
