# [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

## Solution: Mine - Sorting Hashmap
- TC: O(n + n ^ logN + n)
  - Runtime: 98 ms, faster than 81.77%.
- SC
  - Memory Usage: 46.2 MB, less than 43.22%.

```js
var topKFrequent = function(nums, k) {
    if (!nums) return [];
    
    if (nums.length === 1) return nums;
    
    let ans = [];

    const map = {};
    
    for (const num of nums) {
        if (map[num]) {
            map[num] += 1
        } else {
            map[num] = 1
        }
    }

    const sortedByValue = Object.entries(map).sort(([,a],[,b]) => b-a);
    
    for (let i = 0; i < k; i++) {
        ans.push(sortedByValue[i][0]);
    }
    return ans;
};
```

### Neater
```js
var topKFrequent = function(nums, k) {
    let res = [], map = new Map();
    
    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    
    return res;
};

```

### The Neatest in 3 lines
```js
var topKFrequent = function(nums, k) {
    /*
        1) we can count all the nums and return the top k keys
        
        time: O(N) + O(N LogN), memory: O(N)
    */
    const counts = {}
    
    for (n of nums) counts[n] = (counts[n] || 0) + 1
    
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, k)
};
```

## Solution: [Bucket Sort](https://leetcode.com/problems/top-k-frequent-elements/discuss/669782/JavaScript-No-Sorting-O(N)-Time)

- TC: O(n + n + n)
- SC: O(unique numbers) + O(highest frequency of number) + O(k).

```js
var topKFrequent = function(nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1 )
  }

  // Iterate over freqMap and store the freq of each integer into the corresponding index of array bucket as a Set.
  // why use Set? -> Preventing add repeating num?
  for (const [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  // buckets is in ascending order.
  // push result from the end.
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }

  return result;
}
```

## Solution: [Max heap](https://leetcode.com/problems/top-k-frequent-elements/discuss/81685/JS-solution-using-min-heap)

- Although JS doesn't have built-in heap, we still could mention this solution in the interview.
- https://leetcode.com/problems/top-k-frequent-elements/discuss/81685/JS-solution-using-min-heap/383026

<!-- TODO: Review again -->
```js
/**
 * It is handmade max heap
 * @usage:
 * let maxHeap = new Heap();
 * let maxHeap = new Heap(100, (a, b) => a.value - b.value);
 * let minHeap = new Heap(100, (a, b) => b-a);
 */
class Heap {
  constructor(compareFn = (a, b) => a - b, capacity = Heap.DEFAULT_HEAP_SIZE) {
    this.capacity = capacity;
    this._heap = [];
    if (typeof compareFn === 'function') {
      this.compare = compareFn;
    }
  }

  get size() {
    return this._heap.length - 1;
  }

  get rootNode() {
    return this._heap[1] ? this._heap[1] : null;
  }

  // Bind `rootNode` to this setter to change this._heap[1] while every time `rootNode` is changed.
  set rootNode(node) {
    this._heap[1] = node;
  }

  insert(obj) {
    if (this.rootNode === null) {
      this.rootNode = obj;
      return this;
    }
    if (this.size >= this.capacity) {
      if (this.compare(this.rootNode, obj) > 0) {
        this.rootNode = obj;
        this._down(1);
      }
    } else {
      this._heap.push(obj);
      this._up(this.size);
    }
    return this;
  }


  _down(index) {
    // why? -> right node is bigger in heap?
    let childIndex = {left: index * 2, right: index * 2 + 1};
    let biggerChildIndex = null;
    if (childIndex.left > this.size) {
      return;
    }
    if (childIndex.left === this.size) {
      biggerChildIndex = childIndex.left;
    } else {
      biggerChildIndex = this.compare(
        this._heap[childIndex.left], this._heap[childIndex.right]) > 0
          ? childIndex.left
          : childIndex.right;
    }
    if (this.compare(this._heap[biggerChildIndex], this._heap[index]) > 0) {
      this._swap(index, biggerChildIndex);
      this._down(biggerChildIndex);
    }
  }


  _up(index) {
    let parentIndex = index >= 2 ? Math.floor(index / 2) : 0;
    if (parentIndex > 0 && this.compare(this._heap[parentIndex], this._heap[index]) < 0) {
      this._swap(parentIndex, index);
      this._up(parentIndex);
    } 
  }

  _swap(index1, index2) {
    let item1 = this._heap[index1];
    this._heap[index1] = this._heap[index2];
    this._heap[index2] = item1;
  }
}
Heap.DEFAULT_HEAP_SIZE = 1000;
```

```js
var topKFrequent = function(nums, k) {
  let frequency = getFrequency(nums);
  // get the heap with k size.
  let minHeap = new Heap((a,b) => b.freq - a.freq, k);

  Object.keys(frequency).forEach(num => {
    minHeap.insert({
      num: num,
      freq: frequency[num]
    });
  });

  let result = [];
  for (let i = 1; i <= k; i++) {
    result.push(parseInt(minHeap._heap[i].num, 10));
  }
  return result;
};

function getFrequency(nums) {
  let result = {};
  nums.forEach(num => {
    result[num] = result[num] ? result[num] + 1 : 1;
  });

  return result;
}
```

## Solution: Another Heap
<!-- TODO: Review again -->
```js
var topKFrequent = function(nums, k) {
    // results array
    let results = [];
    
    // 1) first step is to build a hash map, where "element -> its frequency"
    // it costs O(n), where n is nums.length
    let map = {};
    nums.forEach(n => map[n] ? map[n] += 1 : map[n] = 1);
    
    let pq = new PriorityQueue();
    // 2) enqueue each map element to max binary heap priority queue
    for(let key in map){
	    // it costs O(log n), where n is nums.length
        pq.enqueue(key, map[key]);
    }
    
    // 3) k times dequeue element from priority queue and push it to results array
    for(let i = 0; i < k; i++){
	    // it costs O(log n), where n is nums.length
        results.push(pq.dequeue());
    }
    
    // return results array
	// as result we have O(n Log n) where n is length of nums
    return results;
};

class PriorityQueue {
    constructor(){
        this._values = [];
    }
    
    enqueue(val, priority){
        this._values.push(new Node(val, priority));
        this._traverseUp();
    }
    
    dequeue(){
        const max = this._values[0];
        const end = this._values.pop();
        if(this._values.length > 0){
            this._values[0] = end;
            this._traverseDown();
        }
        return max.val;
        
    }
    
    _traverseUp(){
        let idx = this._values.length - 1;
        const el = this._values[idx];
        while(idx > 0){
            let pIdx = Math.floor((idx - 1) / 2);
            let parent = this._values[pIdx];
            if(el.priority <= parent.priority) break;
            this._values[pIdx] = el;
            this._values[idx] = parent;
            idx = pIdx;
        }
    }
    
    _traverseDown(){
        let leftChildIdx = null;
        let rightChildIdx = null;
        let leftChild = null;
        let rightChild = null;
        let swapIdx = null;
        
        let idx = 0;
        const el = this._values[idx];
        while(true){
            swapIdx = null;
            leftChildIdx = 2 * idx + 1;
            rightChildIdx = 2 * idx + 2;
            
            if(leftChildIdx < this._values.length){
                leftChild = this._values[leftChildIdx];
                if(leftChild.priority > el.priority){
                    swapIdx = leftChildIdx;
                }
            }
            
            if(rightChildIdx < this._values.length){
                rightChild = this._values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild.priority > el.priority) ||
                    (swapIdx !==null && rightChild.priority > leftChild.priority)
                ) {
                    swapIdx = rightChildIdx;
                }
            }
            
            if(swapIdx === null) break;
            this._values[idx] = this._values[swapIdx];
            this._values[swapIdx] = el;
            idx = swapIdx
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
```