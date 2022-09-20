# [Questions](https://leetcode.com/problems/linked-list-cycle/)

## Solution: Fast and Slow Pointer

```js
var hasCycle = function(head) {
    let fast = head;

    while (fast && fast.next) {
        head = head.next; // slow pointer
        fast = fast.next.next;
        if (head === fast)  return true
    }
    return false;
};
```

### My answer: Got a infinite loop

> My thought was right, use the fast and slow pointer! It's a progress!

Why I fail?
- fast pointer should start at the same point as the slow pointer!
- The correct way is below, but the slow pointer could just use the head itself.

```js
var hasCycle = function(head) {
    let slow = head;
    let fast = head.next;
    // correct way
    // let fast = head;

    while (slow && fast) {
        slow = slow.next;
        fast = fast.next;
        // correct way
        // fast = fast.next.next
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
```
