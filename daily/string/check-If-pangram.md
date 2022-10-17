# [1832. Check if the Sentence Is Pangram](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)


## Solution: One liner with Set - O(n)
- We only have to check if we have the 25 unduplicated letters.
- `Set` -> unduplicated element

```js
const checkIfPangram = function(sentence) {
    return [...new Set(sentence)].length >= 26
};
```

## Solution: Mine - O(n + n + n)
- Hashmap

```js
var checkIfPangram = function(sentence) {
    if (sentence.length < 26) return false;
    
    const map = {};
    
    for (let i = 97; i <= 122; i++) {
        map[i] = false;
    }
    
    for (let i = 0; i < sentence.length; i++) {
        map[sentence[i].charCodeAt()] = true;
    }
        
    return Object.values(map).every(e => e);
};
```