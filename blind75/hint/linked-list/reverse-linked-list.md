# Question
> https://leetcode.com/problems/reverse-linked-list/

```js
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// @param {ListNode} head
// @return {ListNode}
```

## Solution

### Iterative
- Time: O(n)
- Space: O(1)

```js
var reverseList = function(head) {
    let prev = null;
    let current = head;
    while (current) {
        current.next = prev;
        prev = current;
        current = current.next;
    }
    return prev;
};
```

Destructuring Assignment
```js
var reverseList = function(head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next]
  }

  return prev;
}
```

### Recursive
- Time: O(n)
- Space: O(n)

```js
var reverseList = function(head) {
    if(!head) return null;
  
    function reverse(prev, node) {
        const next = node.next;
        node.next = prev;
        if(!next) return node;
        return reverse(node, next);
    }
    return reverse(null, head);
}
```
