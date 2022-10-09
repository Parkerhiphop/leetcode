# [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

- This one is so hard for me.
- TODO: Review again.

## Solution: Two Pointer
```js
const longestPalindrome = (s) => {
    // Left and Right index of the longest palindrome.
    let leftIndex = 0, rightIndex = 0;

    // Iterate all palindromes with center indices
    // [..., i, ...] or [... i, i+1, ...]
    for (let i = 0; i < s.length; i++) {
        for (let j of [i, i+1]) {
            for (left = i, right = j; s[left] && s[left] === s[right]; left--, right++) {
                // Found a new palindrome [left, ..., i, j, ..., right]
                // Update the leftIndex, rightIndex if the newly found palindrome is longer than the existing one.
                [leftIndex, rightIndex] = (right - left + 1) > (rightIndex - leftIndex + 1)
                    ? [left, right]
                    : [leftIndex, rightIndex];
            }
        }        
    }
    
    return s.substring(leftIndex, rightIndex+1);
}
```

## Solution: DP

- Table is s.length x s.length
- Table Element would be a boolean, let you know from `i` to `j` is a longest palindromic substring. 
- `findSub(target, i, j)`

[Golden Rules](https://www.youtube.com/watch?v=Fi5INvcmDos)
1. str[i] == str[j] && dp[i + 1][j - 1] == True
2. i - j >= 2

- We only have to check the first and last.
- As for the middle is already checked, and store in the table.

ex: abaabc
substring(0, 2) = aba
1. [0] === [2] = 'a' && dp[1][1] === True
2. 2 - 0 = 2

```js
const longestPalindrome = (s) => {
  let size = s.length;

  const dp = new Array(size - 1).fill(
    new Array(size - 1).fill(false)
  );

  // Base case: the LPC only has one characters like 'a', 'b'
  // Also Set the value of dp[i][i].
  for (let i = 0; i < size; i++) {
    dp[i][i] = true;
    lps = s[i];
  }

  // Base case: check LPC is two characters like 'bb', 'aa' X'ab', 'ba', ...
  // Also set the value of dp[i][i+1]
  for (let i = 0; i < size; i++) {
    if (s[i] === s[i+1]) dp[i][i+1] = true;
    if (dp[i][i+1]) lps = s.substring(i, i + 2); 
  }

  // Check the rest characters. (Three or More)
  // Fit the Golden Rules' iteration.
  for (let i = size - 1; i >= 0; i--) {
    for (let j = i + 2; j < size; j++) {
      dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
      if (dp[i][j]) {
        // Make sure lps is the longest.
        lps = lps.length < (j - i + 1)
          ? s.substring(i, j + 1);
          : lps
      }
    }
  }

  return lps;
}
```
