# [1239. Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)

## [Solution: DP 95%](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/discuss/1479299/JavaScript-95-DP)
- SC: O(n * n * m)
- TC: ?

- Also Greedy?

```js
const maxLength = arr => {
  let res = 0;

  const dp = (idx, cur) => {
    res = Math.max(res, cur.length);
    
    for (let i = idx; i < arr.length; i++) {
      (
        (cur+arr[i]).length === new Set([...cur,...arr[i]]).size
      ) && 
        dp(i + 1, cur + arr[i]);
    }
  }

  dp(0, '')
  return res;
}
```
