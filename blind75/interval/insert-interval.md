# [57. Insert Interval](https://leetcode.com/problems/insert-interval/)

## [Solution: O(n)](https://leetcode.com/problems/insert-interval/discuss/298982/Javascript-Solution-95-fast)
```js
var insert = function(intervals, newInterval) {
    const result = [];
    
    /*
    Three cases:
    1 - If we have already added newInterval or the current interval ends before the new one starts
    2 - If newInterval ends before the current one starts
    3 - If there is an overlap that requires a merge

    My explanation:
    1. end < [0]
        -> push(current)
    2. [1] < start
        -> push(newInterval)
        -> null
        -> push(current)
    3 else
        start <= 0 < end <= 1
        0 <= start < 1 <= end
        -> min([0], start) / max([1], end)
    4. end > [0]
        push at the end
    */

    for (const [start, end] of intervals) {
        if (!newInterval || end < newInterval[0]) {
            result.push([start, end]);
        } else if (newInterval[1] < start) {
            result.push(newInterval);
            newInterval = null;
            result.push([start, end])
        } else {
            newInterval[0] = Math.min(newInterval[0], start);
            newInterval[1] = Math.max(newInterval[1], end);
        }
    }
    
    // If newInterval has not been added it means it must be the last one
    if (newInterval) {
        result.push(newInterval);
    }
    
    return result;
};
```
