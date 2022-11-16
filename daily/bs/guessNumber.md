# [374. Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/description/)


## Solution: Binary Search
```js
var guessNumber = function(n) {
    let start = 0;
    let end = n - 1;

    while (end >= start) {
        let mid = Math.floor((end + start) / 2)
        let result = guess(mid);
        
        if (result === -1) { // mid > pick
            end = mid - 1
        } else if (result === 1) { // mid < pick
            start = mid + 1
        } else {
            return mid;
        }
    }

    return start;
};
```
