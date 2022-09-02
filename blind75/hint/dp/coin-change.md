# [Question](https://leetcode.com/problems/coin-change/)

## Solution: 用 dp 存 amount 所需要的 coin 數量
- ex: `dp[1]`: amount 為 1 時，需要的硬幣數量（infinite or 1）
- 而製表的方法是用 for/of 輪流看每個 coin 需要多少個才能達到 amount
- 並在之後的 for loop 中，以 coin 為起點再去算需要多少個

### 如何製表？
- dp 初始值是 amount + 1 個 infinite
- 之所以要 + 1 是因為 index 從 0 開始，而 0 的時候自然會需要 0 枚 coin

### 為什麼會是以 coin 當起點？
- 因為若 coin = 5 時，自然只能從 amount >= 5 出發

### 為何比較的兩方是 `dp[i]` ＆ `dp[i - coin] + 1`

> dp 的 index 就是 amount，而 value 就是該 amount 需要的 coin 數量
- `i` 在這可以當成 amount

`dp[i]`  =  `dp[amount]`
- 因為比較的過程都是在 for coin of coins 內，所以當前拿來比較的 `dp[amount]` 才會是上一次 coin 的結果

`dp[i - coin] + 1` = `dp[amount - coin] + 1` 
- 因為要把現在的 coin 加一枚進來，amount 自然會減當前 coin 的值並 + 1
- ex: i = 7 ，在 coin = 5 的時候
  - 這裡要算的就不是 amount = 7，而是一枚 5 的 coin ＋ 剩下的 7-5 = 2 所需要的最小 coin 數
- 這作法也解決了倍數的問題
- ex: i = 11, 在 coin = 5 的時候
  - `dp[11 - 5] + 1 = dp[6] + 1(coin 5 * 1)`
  - `dp[6] = dp[6 - 5] + 1(coin 5 * 1)`
  - `dp[11] = dp[1] + 2(coin 5 *2)`

### 最後的 infinite 判斷？
- 因為一開始 dp 的初始值都是 `infinite` 
- 若 `dp[amount] = infinite` 一直沒有被 Math.min 洗掉
- 就代表表 coins 裡的硬幣組合不會加乘出 amount 的結(因為 i = coin，是從 coin 開始算)

```js
var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
```
