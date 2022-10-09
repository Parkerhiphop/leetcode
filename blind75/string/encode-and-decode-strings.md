# 271. Encode and Decode Strings(Premium)

Example1
```
Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
```

Explanation:
One possible encode method is: "lint:;code:;love:;you"

Example2
```
Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
```

Explanation:
One possible encode method is: "we:;say:;:::;yes"

- 解法就是在 string 中間
- [Reference](https://www.youtube.com/watch?v=nn15nIlVNbs)

## [Solution: Time complexity of O(N)  and constant space](https://www.youtube.com/watch?v=nn15nIlVNbs)
```js
const encode = function(strs) {
  if (!strs.length) return null;

  return strs.join('-encodeStr');
}

const decode = function(s) {
  if (s === null)  return [];

  return s.split('-encodeStr');
}
```

```python
def encode(self, strs):
  res = ""
  for s in strs:
    res += str(len(s)) + '#' + s
  return res

def decode(self, strs):
  res, i = [], 0
  
  while i < len(str):
    
  return 
```
