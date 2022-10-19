# [38. Count and Say](https://leetcode.com/problems/count-and-say/)

1. Iteration - O(n x n)
2. Regex - O(n x n)
4. Recursion


## Solution: Simple String Manipulation

- I stuck in the `array[index]`
- While we are accessing the inexistent element in an array, we would get `undefined`. - ex: `arr['1']`, and `arr[1]` is undefined.

```js
const countAndSay = function(n) {
  let str = '1';

  for (let i = 1; i < n; i++) {
      let strs = str.split('')

      str = ''
      
      let count = 1;

      for (let j = 0; j < strs.length; j++) {
          let current = strs[j];
          
          if (current === strs[j + 1]) {
              count++
          } else {
              str += count + current
              count = 1;
          }
      }
  }
  
  return str;
}
```

## Solution: Regex
<!-- TODO: Learn Regex -->
```js
const countAndSay = function(n) {
  let res = '1';

  for (let i = 1; i < n; i++) {
    // ex: '11222333'
    res = res
      .replace(/((\d)\2*)/g, '$1-') // after the replacement we have: '11-222-333-'
      .split('-') // [ '11', '222', '333', '' ]
      .map(str => str ? `${str.length}${str[0]}`: '')  // [ '21', '32', '33', '' ]
      .join('') // '213232'
  }

  return res;
}

/** Cleaner */
const countAndSay = function(n) {
  let res = '1';

  for (let i = 1; i < n; i++) {
    res = res.replace(/(\d)\1*/g, num => num.length + num[0]);
  }

  return res;
}
```

## Solution: Super Recursive

- Since the case won't exceed 3, we only have to match 1~3 and use the result array to accumulate.
- [Examples of nth sequence](https://leetcode.com/problems/count-and-say/discuss/15995/Examples-of-nth-sequence)

```js
const countAndSay = function(n) {
    if (n === 1) return '1';
    
    return countAndSay(n-1)
        .match(/1+|2+|3+/g)
        .reduce((acc, nums) => acc += `${nums.length}${nums[0]}`, '')
};
```
