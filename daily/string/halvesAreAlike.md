# [1704. Determine if String Halves Are Alike](https://leetcode.com/problems/determine-if-string-halves-are-alike/description/)

> #two-pointer

## Solution: Mine

```js
var halvesAreAlike = function (s) {
  let r = s.length - 1;
  let a = 0;
  let b = 0;

  const mapper = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };

  for (let l = 0; l < s.length / 2; l++) {
    if (mapper[s[l]]) a++;
    if (mapper[s[r]]) b++;
    r--;
  }

  return a === b;
};
```

## [Solution](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/1146651/js-python-java-c-easy-lookup-solution-w-explanation/)

```js
const vowels = 'aeiouAEIOU';

var halvesAreAlike = function (S) {
  let mid = S.length / 2,
    ans = 0;
  for (let i = 0, j = mid; i < mid; i++, j++)
    ans += vowels.includes(S.charAt(i)) - vowels.includes(S.charAt(j));
  return ans === 0;
};
```
