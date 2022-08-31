# Minimum Window Substring
> https://leetcode.com/problems/minimum-window-substring/

## Solution

```js
var minWindow = function (s, t) {
    let min = '', left = 0, right = -1;
    let map = {};
    
    t.split('').forEach(element => {
        if (map.hasOwnProperty(element)) map[element]++;
        else map[element] = 1;
    });

    let count = Object.keys(map).length;
    
    while(right < s.length) {
        if (count !== 0) {
            right++;
            let current = s[right];
            
            if (map[current] !== null) map[current]--;
            if (map[current] === 0) count--;
        } else {
            let curSubstring = s.substring(left, right + 1);
            if (min === "") min = curSubstring;
            else min = curSubstring.length > min.length ? min : curSubstring;
        
            let current = s[left];
            if (map[current] !== null) map[current]++;
            if (map[current] > 0) count++;
            left++;   
        }
    }
    return min;
}
```

### 解題思路
1. 先向右邊找到有包含 t 的 substring
2. 縮減左邊的長度，並在縮減時迭代 min substring value
3. 在左邊若有遇到 t 有的 character，就會再跑去右邊找還有沒有重複的 character（若 t 有 'A'，而 left 也遇到了 'A'，就會再去 right++ 來瞰後面有沒有 'A'，有的話就判斷 left 'A' 跟 right 'A' 哪個 substring 較短）
4. 1~3 輪迴來 right++，再 left--，並在每次 left 發現 t 的 substring 時去判斷 min substring of s

```js
const minWindow = function (s,t) {
  let min = "", left = 0, right = -1;
  let map = {};

  // see how many different character we need to find.
  // use hash map to store it.
  // ex: t = 'ABC'
  // map = { 'A': 1, 'B': 1, 'C': 1  } means we have to find one 'A', one 'B', and one 'C'.
  t.split('').forEach(element => {
      if (map.hasOwnProperty(element)) map[element]++;
      else map[element] = 1;
  });

  let count = Object.keys(map).length;

  while (right <= s.length) {
    if (count !== 0) {
      // 首先，不斷向右延伸我們的 window
      // count 代表我們要找的 key 數量
      // 當 count = 0 時，代表目前的 window 中都有我們要找的 character 了
      right++;
      let current = s[right];

      // decrease the count for current character
      if (map[current] !== null) map[current]--;

      // map[current] = 0 時代表這個 character 已經符合條件了，所以可以減少我們要找的 count
      if (map[current] === 0) count--;      
    }

    // if count = 0，代表現在的 window 已包含了我們要的值
    // temp = s 在當前 window size 的 string value
    let temp = s.substring(left, right+1);
    // 如果 temp 比 min 還短，temp 就取代上一次的 min
    // min === "" 時一定最小，需要先置換！（但若 t 在 s 沒有 substring 的話就會直接回傳 ""）
    if (min === "") min = curSubstring;
    else min = curSubstring.length > min.length ? min : curSubstring;

    // count = 0 時，map 裡的值會是 <= 0
    let current = s[left];
    // map 若經有 current 這個 string，就++
    if (map[current] !== null) map[current]++;

    // 因為上面++ 了，count 就需要 ++（恢復成有值的狀態）
    // count > 0 的話就可以再進入 right 的計算，因為原本的 right 只會在第一次找到 substring 時停止
    if (map[current] > 0) count++;

    // right++ 是擴大 window size
    // left++ 就是縮小 window size

    // 試著再縮小 window size 來看 substring 是否依然在範圍內
    left++
  }

  return min;
}
```
