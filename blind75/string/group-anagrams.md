# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)


- 寫超久，自以為簡單版的 [valid anagram](valid-anagram.md) 解得出來，這個就解得出來
- 結果寫超醜超久又沒解出來
- 自己對 hash map 的變化終究還不夠熟悉

## Solution: Sorted + Hashmap(Object)

> Time Complexity: O(n*klog(k))
- where n is the length of input array and k is the maximum length of a string in input array
- n -> for of `strs`
- k -> sort the each `str`

> Space Complexity: O(n)


- 先將每個 str 照字母順序排
- abc, bac, bca 都會被排成 abc，就能以此丟到 hash map 裡
- ex: { 'abc': ['abc', 'bac', 'bca'] }
- 最後再用 Object.values() 來回傳結果

```js
const groupAnagrams = function(strs) {
    let obj = {};
    for (let str of strs) {
        let letters = str.split('').sort().join("");
       obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
       
    return Object.values(obj);
};
```

## Solution: Sorted + Hashmap(Map)
```js
const groupAnagrams = function(strs) {
    let hashmap = new Map();
    
    for (let str of strs) {
        let sorted = str.split('').sort().join("");
        if (hashmap.has(sorted)) hashmap.set(sorted, [...hashmap.get(sorted), str]);
        else hashmap.set(sorted, [str]);
    }
    
    // Array.from can make an iterable object to array.
    // Map.prototype.values is an iterable object.
    return Array.from(hashmap.values());
};
```

## Solution: Count the CharCode of each key + Hashmap
>  Time Complexity: O(n*k)
  - n is the size of input array
  - k is the maximum length of string in input array

>  Space Complexity: O(n)
```js
const groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt() - 97]++;
        let key = count.join('#');

        res[key] ? res[key].push(str) : res[key] = [str];
    }
    
    return Object.values(res);
};
```

```
["eat","tea","ate", "tan","nat","bat"]

1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0
1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0
1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0
1#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0
1#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0
1#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0
```

## Solution: Mine(Failed)
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const isAnagram = (s,t) => {
    let m = {};
    for (let c of s) m[c] = (m[c] || 0) + 1;
    for (let c of t) {
        if (!m[c]) return false;
        m[c]--;
    }
    
    return true;
}

const groupAnagrams = function(strs) {
    if (strs.length === 1) return [strs];

    let result = []
    
    // isAnagram = true => push, but push to result[?]
    // what to compare?
    // compare to each result[?][0]

    for (let str of strs) {
        if (result.length) {
            for (let i = 0; i < result.length; i++) {
                console.log('result[i]', result[i][0])
                console.log('str', str)
                if (isAnagram(result[i][0], str)) {
                    result[i].push(str)
                    break;
                } else {
                    result.push([str])
                    break;
                }
            }            
        } else {
            result.push([str])
        }

        console.log(result);
    }

    return result;
};
```
