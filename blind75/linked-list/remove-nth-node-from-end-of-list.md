# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Solution:: [Two Pointer](https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1164542/JS-Python-Java-C%2B%2B-or-Easy-Two-Pointer-Solution-w-Explanation)
- O(1) extra space

- Concept: Find a way to both reach the end of the list with one pointer and also reach the n'th node from the end simultaneously with a second pointer.

```js
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    
    // When n is the same as the length of the list
    // -> the first node the target node,
    // ex: head=[1], n=1
    for (let i = 0; i < n; i++) fast = fast.next;
    if (!fast) return head.next;
    
    // fast pointer is already at nth position
    // during the while loop, slow pointer would could loop to nth from the end.
    while (fast.next) fast = fast.next, slow = slow.next;
    
    // while (fast.next === null) means slow is at nth from the end.
    // We just check the head's next by reassign slow's next.
    slow.next = slow.next.next;
    
    return head;
};
```

## Solution: Mine(Failed)
- 1 hours and Only Pass the Test Cases. -> I should check the discussion earlier. (Because I don't know it's a two pointer question.)
- Fail `head=[1,2] n=2`
```js
var removeNthFromEnd = function(head, n) {
    if (!head.next) return head.next;

    let count = 0;
    let current = head;
    let index = -n;
    
    while (current) {
        current = current.next;
        index++;
    }
        
    current = head;

    while (current) {
        let target = current;
        let temp = current.next;
        if (count === index - 1) {
            current.next = temp.next;
            break;
        }
        
        current = temp;
        count++;
    }
    
    return head;
};
```