# [345. Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/description/)

## Solution: Two Pointer
```js
const reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let i = 0, j = s.length - 1, arr = s.split('');

    while (i < j) {
      if (vowels.has(arr[i]) && vowels.has(arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
      } else if (vowels.has(arr[i])) {
        j--
      } else {
        i++
      }
    }

    return arr.join('');
}
```

## Solution: [Fancy with regex](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/81247/2-line-javascript-o-n-solution-using-stack-and-regex/)
```js
const reverseVowels = function(s) {
    const vowels = s.split('').filter(a => /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((res, a) => res + a + (vowels.pop() || ''), '');
};
```
