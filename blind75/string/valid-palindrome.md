# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## Solution: Mine (Unexpectedly use the two pointer)
- Took me 30 mins
- But Runtime and Memory seem good.
  - Runtime: `72 ms`, faster than `96.62%` of JavaScript online submissions for Valid Palindrome.
  - Memory Usage: `44.2 MB`, less than `86.31%` of JavaScript online submissions for Valid Palindrome.


```js
var isPalindrome = function(s) {
    // turn string to lowercase and use regex to remove non-alphanumeric
    let joint = s.replace(/[^a-z0-9]/gi,'').toLowerCase()

    if (!joint) return true;

    let group = joint.length / 2;

    for (let i = 0; i <= group - 1; i++) {
        // find index of string can use string.charAt()
        if (joint[i] !== joint[joint.length - 1 - i]) {
            return false;
        }
    }

    return true;    
};
```

1. Test Case should be an Alphanumeric characters.
   - Use Regex to replace the original string.
   - [regex: `/[^a-z0-9]/gi`](https://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric)
     - `gi`: global (not just on the first match), and case-insensitive
       - so we could use `a-z` instead of `a-zA-Z`
     - `^`: anything not in these brackets.
       - ex: `'[^ab]'` matches any character except `'a'` or `'b'`.
     - version allows space.
       - `'$string'.replace(/[^a-z0-9\ ]/gi,'')`
2. Valid the string from margin to center.

```js
ex: string.length === 8
Check 34 / 25 / 16 / 07
group = 4
0 === 8 - 1 - 0
3 === 8 - 1 - 3(4)

ex: string.length === 7
Check except middle(3) -> 24 / 15 / 06
group = 3.5
0 === 6
2 === 7 - 1 - 2(4)
```

## Solution: Two pointer(Left and Right)
```js
const isPalindrome = function(s) {
  s = s.replace(/[^A-Za-z0-9]/g, '')toLowerCase();
  // s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  let start = 0;

  let end = s.length - 1;

  while(start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }

  return true;
}
```

## Solution: Simple But Not Recommend
```js
var isPalindrome = function(s) {
    var strippedString = s.replace(/\W/g, '');
    var reversedString = strippedString.split('').reverse().join('');
    
    return strippedString.toLowerCase() == reversedString.toLowerCase();
};
```

### [Reason](https://leetcode.com/problems/valid-palindrome/discuss/40284/Javascript-solution-if-anyone-is-interested/707210)
1. Hidden Complexity.
  -  Replace, split, reverse, join add O(n) to the time complexity.
2. Against the purpose to learn algorithm on leetcode.
3. You may fail an interview if you write this.
