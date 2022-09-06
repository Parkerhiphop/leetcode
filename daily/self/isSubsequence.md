# [Is Sequence](https://leetcode.com/problems/is-subsequence/)

## My Solution: O(n)

Just iterate through the string 't'.

```js
var isSubsequence = function(s, t) {
    let arrS = s.split('');
    let arrT = t.split('');
    
    for (let i = 0; i < t.length; i++) {
        if (!arrS.length) return true;

        if (arrS[0] === arrT[i]) {
            arrS.shift();
        }
    }
    
    return !arrS.length;
};
```

## Two Pointer Solution: O(n)

Fast and slow pointer?

Add the fast one by default.
While matches, add the slow one as well.

```js
var isSubsequence = function(s,t) {
  let fast = 0, slow = 0;

  while(fast < t.length && slow < s.length) {
    if (s[slow] === t[fast]) {
      slow++;
    }

    fast++;
  }

  return slow === s.length;
}
```
