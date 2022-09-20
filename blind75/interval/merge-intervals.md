# [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

## Solution: O(n)
- 觀念都是先排序 start
- 接著紀錄 previous interval
- Iterate 時確認是哪一種
  1. `replace end (start <= previous end)` 
     - ex: [2, 3] vs prevEnd = 5 -> [2, 5]
     - ex: [2, 5] vs prevEnd = 3 -> [2, 5]
  2. `push interval( start > previous end )`
     - ex: [6, 8] vs prevEnd = 5
     - result.push([6,8])
     - result = [..., [prevStart, 5], [6, 8]]

```js
var merge = function(intervals) {

    if (!intervals.length) return [];

    // 先按照 interval start 來排序 intervals
    // 下面 iterate 時就不用考慮 後面的 start 比前面小要再 replace 的問題
    intervals.sort((a, b) => a[0] - b[0]);

    // 從 start 最小值的 interval 開始
    const result = [intervals[0]]
  
    
    for (const [start, end] of intervals) {
        // 當前 result 的 end 會再每次迭代被重置
        const prevEnd = result.at(-1)[1]
        
        if (start <= prevEnd) {
            // start 比較小所以不用變
            // end 有可能需要變，所以比較 end & prevEnd 誰比較大來讓 interval 涵蓋更大的範圍
            result.at(-1)[1] = Math.max(end, prevEnd);
        } else {
            // start > preEnd
            // start 比 prevEnd 大，end 就一定也比較大
            // 這邊就可以直接把 [start, end] 推到現在 result 的後面

            // 下一輪現在的 end 就會取代 prevEnd 來給後面做新一輪的判斷
            // 看是要像上面一樣只改 end 還是像這邊直接 push [start, end] 
            // ex: [6, 8] vs prevEnd = 5
            // next round result = [..., [prevStart, 5], [6, 8]]
            result.push([start, end])
        }
    }

    return result;
};
```

```js
var merge = function(intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] < b[0] ? -1 : 1)
  let prev = intervals.shift()
  let res = [prev]

  /** without destructive  */ 
  for (const cur of intervals) {
    if (cur[0] <= prev[1]) {
      // 用 cur 的話
      // 下面 res.push(cur) 的 cur 會是取 prev 的 reference
      // res = [...elements, cur=prev] 
      // 若 prev[1] 改變 cur 也會改變 -> res.at(-1) 也會改變
      // 上面如果先 [start, end] 解構的話，reference chain 就會斷掉
      prev[1] = Math.max(prev[1], cur[1])
    } else {
      res.push(cur)
      prev = cur
    }
  }

  /** with destructive  */ 
  // for (const [start, end] of intervals) {
  //   if (start <= prev[1]) {
  //   //only replace end
  //     prev[1] = Math.max(prev[1], end)
  //     // res.at(-1) doesn't refer to prev (refer to end) -> need manually update
  //     res.at(-1)[1] = prev[1]
  //   } else {
  //     // replace prev to current
  //     res.push([start, end])
  //     prev = [start, end]
  //   }
  // }

  return res
};
```

### NOTE: 為何需要用 `array.at(-1)` 而不能用 `array[-1]` 取最後一個值？
- Arrays are objects (exotic object) and -1 is a valid key.
- https://stackoverflow.com/questions/54066261/why-cant-i-do-array-1-in-javascript
```js
let array = [1, 2, 3];

array[-1] = 42;

console.log(array);
console.log(array[-1]);
```


## Solution: Mine (Failed)

我的解法，想辦法用 insert intervals 的方式解

但想不出不斷迭代 newIntervals 並 push 的方案

---

把 intervals[0] 當成 newInterval 的話

newInterval 本身 range 沒涵蓋到的地方都無法判斷
