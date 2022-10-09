# [143.Reorder List](https://leetcode.com/problems/reorder-list/)

- From `0, 1, ... n-1, n`
- To `0, n, 1, n-1 ,2 ,n-2 ...`

## [Solution: Two Pointer (Better)](https://leetcode.com/problems/reorder-list/discuss/1734333/3-step-Space-efficient-Javascript-Solution)

- Advanced of [Reverse Linked List](reverse-linked-list.md)

```js
var reorderList = function(head) {
  /** Step 1: find middle */
	// by moving "fast" twice, we'll have "slow" in the middle
  let fast = head, slow = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  /** Step 2: Reverse second half */
  // with reverse linked list solution
  let [prev, cur] = [null, slow.next];

  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next];
  }

  slow.next = null

  /** Step 3: Combine two halves */
  let halfOne = head, halfTwo = prev;

  // if even, second half wil be smaller.
  while (halfTwo) {
    let temp = halfOne.next;
    halfOne.next = halfTwo;
    halfOne = halfTwo
    halfTwo = temp
  }
}
```

### Example Run
```
head: 1 -> 2 -> 3 -> 4 -> 5

h1: 1 -> 2 -> 3
h2: 5 -> 4

head: 1 -> 5 -> 2 -> 4 -> 3
```

## Solution: Stack(Not Recommend)
- TC would be higher than O(n) as there is a shift() call, which is O(n) operation
- Inside the for loop & because of the stack, the SC would be O(n).

```js
var reorderList = function(head) {
    let stack = [], node = head;
    
    if (!node) return;
    
    // initialize stack
    while (node) {
        stack.push(node);
        node = node.next;
    }
    
    let len = stack.length;

    // reset node
    node = head;

    for (let i = 0; i < len; i++) {
        // odds are original index
        // evens are index from the end
        if (i % 2 === 0) {
            node.next = stack.shift()
        } else {
            node.next = stack.pop()
        }
        
        node = node.next;
    }
    
    node.next = null;
};
```
