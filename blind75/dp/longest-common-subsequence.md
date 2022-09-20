# [Question](https://leetcode.com/problems/longest-common-subsequence/)

## Solution: DP
```js
var longestCommonSubsequence = function(text1, text2) {
    const dp = [];
    let m = text1.length;
    let n = text2.length;
    
    for (let i = 0; i <=m; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }
    
    for (let i = 1; i <=m; i++) {
        for (let j = 1; j <=n; j++) {
            if (text1.charAt(i - 1) !== text2.charAt(j - 1)) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            } else {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    
    return dp[m][n];
};
```

1. Create a text1.length x text2.length  matrix
2. While iterating the matrix, there's two scenarios
   1. the current char of text1 and text2 does not match
      - Check left and top for longer subsequence length
   1. the current char of text1 and text2 matches
      - Prev Longest subsequence + 1
      - prev Longest subsequence is at left top

References
1. https://tiahi5914.medium.com/leetcode-%E7%AD%86%E8%A8%98-1143-longest-common-subsequence-b6c7eebd1328
2. https://leetcode.com/problems/longest-common-subsequence/discuss/598743/JavaScript-Solution

## Solution: Recursion
```js
var longestCommonSubsequence = function(text1, text2) {
    const memo = new Map();
    return recursion(text1, text2, text1.length - 1, text2.length - 1, memo);
};

function recursion(text1, text2, index1, index2, memo) {
    // base cases
    if (index1 < 0 || index2 < 0) return 0;
    
    const key = index1 + '#' + index2;
    
    if (memo.has(key)) return memo.get(key);
    
    let result;

    if (text1.charAt(index1) === text2.charAt(index2)) {
        result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
    } else {
        result = Math.max(recursion(text1, text2, index1, index2 - 1, memo), recursion(text1, text2, index1 - 1, index2, memo));
    }
    
    memo.set(key, result);
    return result;
}
```
