# [139. Word Break](https://leetcode.com/problems/word-break/)

## Solution: DP

[Entire Process Reference](https://leetcode.com/problems/word-break/discuss/397927/Clean-JavaScript-solution-(BFS-Dynamic-Programming))
```js
const wordBreak = (s, wordDict) => {
  if (wordDict?.length === 0) return false;

  const wordSet = new Set(wordDict);

  // 表的長度是 s.length + 1
  // 把 wordDict 丟下去判斷在 dp[n] 時有沒有包含 wordDict's element
  // 因為字母可以重複利用，所以可以單向度地去找
  const dp = Array(s.length + 1).fill(false);

  dp[0] = true; // index start from 0.

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const target = s.slice(start, end);

      // dp[start] 的意義在於判斷前一個 wordDict's element 有沒有 match
      if (dp[start] === true && wordSet.has(target)) {
        dp[end] = true;
        break;
      }
    }
  }


  return dp[s.length];
}
```

## [Solution: BFS](https://leetcode.com/problems/word-break/discuss/397927/Clean-JavaScript-solution-(BFS-Dynamic-Programming))
<!-- TODO: Review again -->
```js
const wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;
  const set = new Set(wordDict);

  // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
  // After 'cats' and 'ca', it will become 'andog', 'tsandog'
  // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
  const visited = new Set();
  const q = [0];

  while (q.length) {
    const start = q.shift();

    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        if (set.has(s.slice(start, end))) {
          if (end === s.length) return true;
          q.push(end);
        }
      }
      visited.add(start);
    }
  }
  return false;
}
```
