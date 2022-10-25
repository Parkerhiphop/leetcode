# [1662. Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)
> #array #string

## Solution: O(n + m) - add char using join, then compare
```js
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};
```

## Solution: O(n) -  add each char to string using for loop, then compare
```js
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = '',str2 = ''
    let len = Math.max(word1.length, word2.length)
    
    for (let i = 0; i < len; i++) {
        if (word1[i]) str1 += word1[i]
        if (word2[i]) str2 += word2[i]
    }
    
    return str1 === str2
};
```

## Solution: add char using reduce, then compare
```js
const arrayStringsAreEqual = (word1, word2) => {
  const str1 = word1.reduce((acc, cv) => acc + cv, '')
  const str2 = word2.reduce((acc, cv) => acc + cv, '')

  return str1 === str2;
}
```
