# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

- https://mycollegenotebook.medium.com/greedy-algorithm-%E8%B2%AA%E5%A9%AA%E6%BC%94%E7%AE%97%E6%B3%95-661ca6590d85

## Solution: Greedy(Is it?)
<!-- TODO: Check the definition of Greedy -->
```js
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    
    // find from the first one, the min consecutive is only the first one.
    let count = 1, max = 1;
    nums.sort((a,b) => a-b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i]-1 === nums[i-1]) {
            count++;
        } else if (nums[i] === nums[i-1]){
            continue;
        } else {
            count = 1;
        }
        max = Math.max(max, count);
    }
    
    return max;
};
```

### Optimal
```js
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    
    let map = new Map();

    // remove duplicate
    for (let num of nums) {
      // init [num] with 1
      map.set(num, 1);
    }

    for (let i in nums) {
      if (map.has(nums[i] - 1)) {
        // mark 0 if num is consecutive, but the first one is 1.
        map.set(nums[i], 0);
      }
    }

    let maxLen = 1;

    for (let num of nums) {

      // check the start point.
      if (map.get(num) == 1) {
        let seqCount = 1;
        // count the consecutive
        while (map.has(num + seqCount)) {
          seqCount+=1;
        }

        // compare the current max (seqCount) with past max (maxLen).
        maxLen = Math.max(maxLen, seqCount)
      }
    }

    return maxLen;
};
```

## Solution: [Slicing Window?](https://leetcode.com/problems/longest-consecutive-sequence/discuss/139940/Simple-JavaScript-O(n)-solution)
```js
function longestConsecutive(nums) {
  let max = 0;
  const lens = {};
  
  for (let n of nums) {
    if (lens[n] != null) continue;

    const l = lens[n - 1] || 0;   // left length
    const r = lens[n + 1] || 0;   // right length

    const len = l + r + 1;

    // extend the length to the boundaries
    lens[n - l] = len;
    lens[n] = len;
    lens[n + r] = len;

    max = Math.max(max, len);
  }

  return max;
}
```
