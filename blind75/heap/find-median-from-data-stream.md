# [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

<!-- TODO: Review Again -->

## Solution: Binary Search minHeap

- TC of splice: O(N) + I(logN) -> O(N)
  - binary search is not conducted every splice.
  - splice and binary search are independent.


```js
const MedianFinder = function() {
  this.arr = [];
}

MedianFinder.prototype.addNum = function(num) {
  // binary search function.
  const bs = n => {
    let start = 0;
    let end = this.arr.length;
    while(start < end) {
      let mid = Math.floor((start + end) / 2);
      if (n > this.arr[mid]) start = mid + 1;
      else end = mid;
    }
    // insert n at index start
    this.arr.splice(start,0,n);
  }

  if (this.arr.length === 0) this.arr.push(num);
  else bs(num);
}

MedianFinder.prototype.findMedian = function() {
  const mid = Math.floor(this.arr.length / 2);

  // check to return the middle or the average.
  return (this.arr.length % 2 === 0)
    ? (this.arr[mid - 1] + this.arr[mid]) / 2
    : this.arr[mid];
}
```

## [Solution: Use Leetcode's default Heap](https://leetcode.com/problems/find-median-from-data-stream/discuss/1404605/Short-JS-solution-with-explanation-(2-Heaps)-%2B-Leetcode's-default-Heap)
```js
class MedianFinder {
  constructor {
    this.minHeap = new MinPriorityQueue() // leetcode built-in heap
    this.maxHeap = new MaxPriorityQueue() // leetcode built-in heap
  }

  addNum(num) {
    // add to min and pop the top for max to keep them in the order we want
    this.minHeap = enqueue(num);
    this.maxHeap = enqueue(this.minHeap.dequeue().element);

    // balance two heaps
    if (this.minHeap.size() < this.maxHeap.size()) {
      this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }
  }

  findMedian() {
    // ex: 21 & 345 -> pop from 345(min heap)
    if (this.minHeap.size() > this.maxHeap.size())  {
      return this.minHeap.front().element;
    } else {
      // ex: 21 & 34 -> pop 1 & 3, return the average.
      return (this.minHeap.front().element + this.maxHeap.front().element) / 2
    }
  }
}
```

## [Solution: built-in minHeap and maxHeap](https://leetcode.com/problems/find-median-from-data-stream/discuss/329657/JavaScript-max-heap-%2B-min-heap)
```js

```
