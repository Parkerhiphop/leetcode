# Longest Repeating Character Replacement
> https://leetcode.com/problems/longest-repeating-character-replacement/

## Solution: Sliding Window + hash map
```js
const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const charMap = {};

  // 不斷延伸 right window
  while(right < s.length) {
    const char = s[right];

    // 如果 charMap 已經有該 Char 就 + 1，沒有就從 1 開始。
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;

    // if (charMap[char] > maxCharCount) maxCharCount = charMap[char];
    maxCharCount = Math.max(charMap[char], maxCharCount);
    
    // right - left + 1 = window size
    // window size - maxCharCount = 可置換的 character 數量 (replaceableChar)
    // k = 可置換的次數
    // replaceableChar 必須 <= k 時，maxCharCount 才算數
    if (right - left + 1 - maxCharCount > k) {
      // 因為 replaceableChar > k -> 需縮小 window size
      charMap[s[left]]--; // 避免計算到 window 以外的 char
      left++; // Shrink window size
    }

    // 能進來迴圈就代表 window size 還可以持續擴大！
    right++;
  }

  // right 右推到底 = s.length - 1
  // 而 left 在 replaceableChar & k 的次數達到平衡 = window 內可置換的 character 在 k個(含)以內，而 maxCharCount 也有取得最大值的情況。
  // right - left = window size ( window = longest repeating character with k times replacement)
  // （ right 因為在 while loop 最後有 + 1，這邊在計算時就不用再加 1 ）
  // （ 說到底會需要 + 1 也只是因為 index 是從 0 開始算的 ）
  return right - left;
}
```

總結來說，這是一個不斷右擴，但同時在左邊也不斷地進行判斷以維持 window 大小在合法範圍內的 Sliding Window 作法！

