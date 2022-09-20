# [133. Clone Graph](https://leetcode.com/problems/clone-graph/)

## DFS

Time complexity is O(N*N) 
- inside for loop we are making recursive calls. 

Space complexity is O(N)

[Reference](https://www.youtube.com/watch?v=mQeF6bN8hMk)

```js
var cloneGraph = function(node) {
    if (!node) return null;
    
    const map = new Map();

    // dfs function
    function clone(root) {
        if (!map.has(root.val)) {
            map.set(root.val, new Node(root.val));

            for (const nei of root.neighbors) {
                // clone root neighbors to current root -> recursive
                map.get(root.val).neighbors.push(clone(nei))
            }
        }

        return map.get(root.val);
    }
    
    return clone(node);
};
```

TODO: Review it
## BFS

```js
var cloneGraph = function(node) {
    let start = node; 
    if (start === null) return null;
    const vertexMap = new Map(); 
    
    const queue = [start]
    vertexMap.set(start, new Node(start.val)); 
    
    while (queue.length > 0) {
        const currentVertex = queue.shift(); 
        for (const neighbor of currentVertex.neighbors) {
            if (!vertexMap.has(neighbor)) {
                vertexMap.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor); 
            }
            vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor)); 
        }
    }
   return vertexMap.get(start); 
};
```

With Explanation
```js
var cloneGraph = function(node) {
    // If start node is null than we can't do any cloning
    let start = node; 
    if (start === null) return null;
    // vertexMap is the original node reference to our node
    const vertexMap = new Map(); 
    
    
    // Add the start node to the queue. Give the start node a clone in the vertex map
    const queue = [start]
    vertexMap.set(start, new Node(start.val)); 
    
    /*
    * Breadth first search continues unitil we process all the vertices in the graph
    * In the original graph. We know this is done when queue is empty
    */
    
    while (queue.length > 0) {
        // We grab a node. We will express all of the edges coming off of this node.
        const currentVertex = queue.shift(); 
        // Iterate over all adjacents.
        for (const neighbor of currentVertex.neighbors) {
          // Has this neighbor been given a clone?
            if (!vertexMap.has(neighbor)) {
                /*
                * No? Give it a mapping and add the original neighbor to the search queue so we
                * can express ITS edges later
                */
                vertexMap.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor); 
            }
            
            /*
            * Draw the edge from currVertex's clone to neighbor's clone. Do you see how our
            * hashtable makes this quick access possible?
            */
            vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor)); 
        }
    }
   return vertexMap.get(start); 
};
```
