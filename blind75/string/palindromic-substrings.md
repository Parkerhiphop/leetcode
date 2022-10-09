# [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

TODO: Review again.

## Solution: Two Pointer (Easy Understanding)

### Python from [NeetCode](https://www.youtube.com/watch?v=4RACzI5-du8)
```python 
class Solution:
    def countSubstrings(self, s: str) -> int:
        res = 0
        for i in range(len(s)):
            # count the pali
            res += self.countPali(s, i, i)
            # count the pali inside a pali
            res += self.countPali(s, i, i + 1)
        return res

    # s: current string
    # l: left pointer
    # r: right pointer
    def countPali(self, s, l, r):
        res = 0

        # span the left and right from middle of s to start and end
        # we only have to check left and right of s, since the middle is already checked.
        while l >= 0 and r < len(s) and s[l] == s[r]:
            res += 1
            l -= 1
            r += 1
        return res
```

### JS
- [Discussion](https://leetcode.com/problems/palindromic-substrings/discuss/311492/Super-Easy-Understand-JavaScript-Solution-with-explanation-beat-95)
```js
const countSubstrings = function(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // found all single number length Palindromic
    count += countPali(s, i, i);
    // found all even number length Palindromic
    count += countPali(s, i, i + 1);
  }

  return count;
}

function countPali(s, l, r) {
  count = 0;
  while (l >= 0 && r < s.length && s[l] === s[r]) res+=1, l-=1, r+=1
  return count;
}
```

## Solution: Two Pointer ( Most Voted )
```js
var countSubstrings = function(s) {
    let size = s.length, ans = 0;

    for (let i = 0; i < size; i++) {
        let slow = i - 1, fast = i;

        while(fast < size - 1 && s[fast] === s[fast + 1]) fast++

        // Nth triangular number: N * (N + 1) / 2
        // account for all the smaller palindromes of which it's made.
        ans += (fast - slow) * (fast - slow + 1) / 2;

        i = fast++;

        while(~slow && fast < size && s[fast] === s[slow]) slow--, fast++, ans++
    }
        
    return ans;
};
```

## Solution: [DP](https://leetcode.com/problems/palindromic-substrings/discuss/589576/javascript-DP-w-comments-and-explanation)

```js
const countSubstrings = function(s) {
    let count = 0;
    const dp = [...Array(s.length)].map((e) => Array(s.length).fill(0));
    
    // go through all substring lengths
    for (let l = 0; l < s.length; l++) {
        // get all substrings of those lengths
        for (let i = 0; i + l < s.length; i++) {
            // j is left pointer plus length
            const j = i + l;

            if (l === 0) {
                // we're on the diagonal, everything is palindrome
                dp[i][j] = 1;
                count++;
            } else if (l === 1) {
                // only check if characters at end are same.
                if (s.charAt(i) === s.charAt(j)) {
                    dp[i][j] = 1;
                    count++;
                }
            } else {
                // check if characters at ends are equal
                // AND check if substring in between them is palindrome
                if (s.charAt(i) === s.charAt(j) && dp[i+1][j-1] === 1) {
                    dp[i][j] = 1;
                    count++;
                }
            }
        }
    }
    return count;
}
```