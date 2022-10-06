# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

## Solution: One-liner (log n times slower) using sort: 
```js
const isAnagram = (s,t) => s.split('').sort().join('') === t.split('').sort().join('');
```

## Solution: Mine - O(n)
> Hashmap with Map
```js
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let hashmap = new Map();
    
    s.split('').forEach(char => {
        if (hashmap.has(char)) {
            hashmap.set(char, hashmap.get(char) + 1)
        } else {
            hashmap.set(char, 0)
        }
    })
    
    t.split('').forEach(char => {
        if (hashmap.has(char)) {
            if (hashmap.get(char) === 0) {
                hashmap.delete(char)
            } else {
                hashmap.set(char, hashmap.get(char) - 1)                
            }
        }
    })
    
    return hashmap.size === 0;
};
```

## [Solution: Hashmap with Object](https://leetcode.com/problems/valid-anagram/discuss/66527/A-few-JavaScript-solutions)
```js
const isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false; // Here can jump to conclusion earlier!
        counts[c]--;
    }
    return true;
};
```

## Solution: Cleaner Hashmap with Object
> By adding the hashmap object on itself.
```js
const isAnagram = function(s, t, m = {}) {
    for (let c of s) m[c] = (m[c] || 0) + 1;
    for (let c of t) if (!m[c]--) return false;
    return Object.values(m).every(v => !v);
};
```

## Solution: Using an array as buckets 
```js
const isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = [];
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!counts[i]) return false;
        counts[i]--;
    }
    return true;
};
```
