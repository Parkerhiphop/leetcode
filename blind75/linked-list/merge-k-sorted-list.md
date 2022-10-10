# [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

Advance of [Merge two sorted list](merge-two-sorted-list.md)

## Solution: Brutal, Push to array and sort
- TC: O(n + n * n)
- SC: ???

```js
var mergeKLists = function(lists) {
    if (!lists || !lists.length) return null;
    let arr = [], res = new ListNode(-1);
    
    // push each node's val to array.
    lists.forEach(list => {
        let cur = list;
        while (cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
    });
    
    // sort the array and change it to linklist.
    let cur = res;
    arr.sort((a,b) => a - b)
        .forEach(n => {
        let temp = new ListNode(n);
        cur.next = temp;
        cur = cur.next;
    })
    
    return res.next;
};
```

## Solution: Compare one by one
- TODO: Review Again
- TC: ???
- SC: ???

```js
var mergeKLists = function(lists) {
  if(!lists || !lists.length) return null;
  
  const findMinNode = (lists = lists) => {
    let index = -1, min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue;
      if (lists[i].val <= min) {
        min = lists[i].val;
        index = i;
      }
    }

    let resNode = null;
    if (index !== -1) {
      resNode = lists[index];
      lists[index] = lists[index].next;
    }
    return resNode;
  }

  let res = new ListNode(-1),
    cur = res,
    temp = findMinNode(lists);

  while(temp) {
    cur.next = temp;
    cur = cur.next;
    temp = findMinNode(lists);
  }

  return res.next;
}
```

## Solution: Priority queue (min heap)
- In JS, an array has the shift() and pop() method that allows user to remove the head and tail element from the original array.

```js
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null;
  }

  // two two
  // priority queue
  while(lists.length > 1) {
    // the head will contains the "less" length list
    let a = lists.shift();
    // Actually, we can use the linked list to replace it.
    // the while loop will be the while(list.header.next !== null || lists.length > 0)
    let b = lists.shift();
    const h = mergeLists(a,b);
    lists.push(h);
  }

  return lists[0]
}

function mergeLists(a,b) {
  const dummy = new ListNode(0);
  let temp = dummy;
  while (a !== null && b !== null) {
    if (a.val < b.val) {
      temp.next = a;
      a = a.next;
    } else {
      temp.next = b;
      b = b.next;
    }

    temp = temp.next;
  }

  if (a !== null) {
    temp.next = a;
  }

  if (b !== null) {
    temp.next = b;
  }

  return dummy.next;
}
```

## Solution: Divide and Conquer
- TODO: Review Again

```js
var mergeKLists = function(lists) {
  return helper(lists, 0, lists.length - 1);
}

function helper(lists, start, end) {
  if (start === end) {
    return lists[start];
  } else if (start < end) {
    const mid = parseInt((start + end) / 2);
    const left = helper(lists, start, mid);
    const right = helper(lists, mid + 1, end);
    return merge(left, right);
  } else {
    return null;
  }
}

function merge (left, right) {
  if (!left) {
    return right;
  } else if (!right) {
    return left;
  } else if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}
```
