# [899. Orderly Queue](https://leetcode.com/problems/orderly-queue/description/)

## Solution
```js
var orderlyQueue = function(s, k) {
  let res = '';
  
  // if k is greater than 1, any permunation is possible.
  if (k === 1) {
    for (let i = 0; i < s.length; i++) {
      s = s.substring(1) + s[0]
      res = s < res ? s : res
    }
    return res
  }

  return s.split('').sort().join('')
}
```
