# [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/)

## Solution: Stack
```js
var removeDuplicates = function(s) {
  let stack = [''];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) stack.pop()
    else stack.push(s[i])
  }

  return stack.join('')
}
```
