# [435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

<!-- TODO: What the mindset of Greedy -->
<!-- 用 Greedy 思考的話，出發點跟思路會怎麼跑？ -->
## Solution: Greedy Approach

```js
var eraseOverlapIntervals = function(intervals) {    
    intervals.sort((a,b) => a[1]-b[1]);
    
    let prev = intervals.shift(), remove = 0;

    for (const cur of intervals) {        
        if (cur[0] < prev[1]) remove++
        else prev = cur
    }
    
    return remove
};
```

My basic setup is correct!
- better to change `overlap` to `remove`.

### 但這邊是依據 end 來排序，不是 start

> 其實這種原則都是先製造出可以不會有例外的狀況。
>
> 像是這裡的 interval 會很複雜，就先從 end 排序

```
[[1,2],[2,3],[3,4],[1,3]]
-> [ [ 1, 2 ], [ 2, 3 ], **[ 1, 3 ]**, [ 3, 4 ] ]

[[1,100],[11,22],[1,11],[2,12]]
-> [ [ 1, 11 ], [ 2, 12 ], [ 11, 22 ], **[ 1, 100 ] ]**
```

按照 end 排序的話，確實就不用考慮 start

只要 prevEnd > curStart 就代表 overlap

涵蓋範圍越大的 interval 會被移到越後面。
- 因應 interval 的特性，start 有沒有重疊不重要，因為一定會比前面的 end 小
  - 比較小就代表他們 overlap -> remove++
- 沒有比較小的話，就重置 prev，重置這動作也可以確保 remove minimum overlap
  - 從前面一個個確保沒有 overlap

因為按照 end 排序，start 沒有被涵蓋到上一個裡面就代表 ok!
