# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## [Solution: Iterative](https://leetcode.com/problems/merge-two-sorted-lists/discuss/524286/JS-Iterative-Recursive)
- Time complexity: O(min(N,M))
- Space complexity: O(1) Its about extra space. It use N space for result itself

```js
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(null);
    
    let curr = head;
    
    // 其中一個被比較完了，剩下的直接在下面 .next merge 進去
    while (list1 && list2) {
        // curr.next 會影響到 head 的值
        if (list1.val < list2.val) {
            // next 會同步到 head
            curr.next = list1;
            list1 = list1.next;
        } else {
            // next 會同步到 head
            curr.next = list2;
            list2 = list2.next;
        }
        
        curr = curr.next;
    }
    
    // 一樣運用 curr.next = head.next 的概念，讓 head 繼承剩下的 list vals
    curr.next = list1 || list2;

    return head.next;
}
```

## Solution: Recursive
- Time complexity: O(min(N,M))
- Space complexity: O(min(N,M))

```js
var mergeTwoLists = function(list1, list2) {
  if (!list1 || !list2) return list1 ? list1 : list2;

  if(list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}
```

理解 linked list 有 val & next 情況下的 recursion 花了一陣子。
- 簡單來說，就是用 recursion 讓較大的值 bottom up
- 最後會變成最小的值（看是在 list1 or list2） 來 next = 排序好的 linked list 來作為最後的 head return。

### Explanation
```js
var mergeTwoLists = function(list1, list2) {
    // bottom up recursion's condition
    // 最後一 round 時回傳當前最大值所在的那個 list
    if (!list1 || !list2) return list1 ? list1 : list2;
    console.log('list1', list1)
    console.log('list2', list2)
    if (list1.val < list2.val) {
        // 當 list1 比較小時，把 list1.next 丟進去跟 list2.val 比較
        // 因為要從最大值 bottom up 回來
        list1.next = mergeTwoLists(list1.next, list2);
        console.log('l1 list1', list1)
        console.log('l1 list2', list2)
        return list1;
    } else {
        console.log('b l2 list1', list1)
        console.log('b l2 list2', list2)
        // 原理同上
        list2.next = mergeTwoLists(list1, list2.next);
        console.log('l2 list1', list1)
        console.log('l2 list2', list2)
        return list2;
    }
};

list1 = [1,2] / list2 = [1,3]

// Round 1
list1 [1,2]
list2 [1,3]
b l2 list1 [1,2]
b l2 list2 [1,3]

// Round 2
list1 [1,2]
list2 [3]

// Round 3
list1 [2]
list2 [3]
// list1.next = null
// mergeTwoLists 進 Round 4 時會在一開始就回傳 list2 = [3]
// 因此這邊會變成 list1.next = [3]
// 接著 return list1 = [2,3] 後 bottom up 進入 round 2

// Round 3
l1 list1 [2,3] // 這行 console 就是來自於 Round3，這時候 list1 = [2,3]
l1 list2 [3] // list2 = [3]

// Round 2
l1 list1 [1,2,3]
l1 list2 [3]

// Round 1 -> else 的區塊，最後會 return list2 = [1,1,2,3]
l2 list1 [1,2,3]
l2 list2 [1,1,2,3]
```
