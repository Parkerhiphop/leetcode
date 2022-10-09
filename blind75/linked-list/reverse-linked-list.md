# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

- TODO: Fail Twice, Plz review it for the third times.

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

### [Iterative](https://leetcode.com/problems/reverse-linked-list/discuss/313728/Javascript-ES6-less-code-solution)
- Time: O(n)
- Space: O(1)

####  List Destructuring Assignment
- Changes the pointers simultaneously
```js
var reverseList = function(head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next]
  }

  return prev;
}
```

#### Linear Assignment
```ts
var reverseList = function(head) {
    let prev = null;
    let next = null;
    let curr = head;

    
    while (curr) {
        next = curr.next; // 2345 // 345
        curr.next = prev; // important 1-> null // 2->1->null
        prev = curr; // 1->null // 2->1->null
        curr = next; // 2345 // 345
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
  
    function reverse(prev, curr) {
        const next = curr.next;
        curr.next = prev;
        if (!next) return curr;
        return reverse(curr, next);
    }
    
    return reverse(null, head)
}
```
