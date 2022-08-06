/** @Note 7.01 & 8.04 都寫一堆判斷方向都錯誤 */

const solution1 = `
    概念：求陣列中最大公差，且要照順序求
    運用 Math.min & Math.max 的概念
    min 先設成無限大
    在 Loop 中用 Math.min 得出在 i 日之前最小的價錢是多少
    min = Math.min(min, prices[i]) -> 一次次迭代中，若 i 日的價錢更低， min 就會被更新
    
    max 先設成 0 （最小正整數）
    在 Loop 中用 Math.max 拿剛得出的 min 來算 i 日時與 min 的差有沒有比之前得出的 max 還大，有的話代表今天可以賺得更多，max 會被更新
    因為是在 loop 中，所以 min 一定是 當日或當日之前
    max = Math.max(max, prices[i] - min);

    -> 其實 min 就是 buyPrice, max 就是 profit;
`;

var maxProfitSolution1 = function (prices) {
  // let min = Number.MAX_SAFE_INTEGER;
  // let max = 0;
  let buyPrice = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    // min = Math.min(min, prices[i]);
    // max = Math.max(max, prices[i] - min);
    buyPrice = Math.min(buyPrice, prices[i]);
    profit = Math.max(profit, prices[i] - buyPrice);
  }

  return max;
};

const solution2 = `
  以第一天的價格為初始值 buyPrice
  當前 profit 是 0

  若 i 日的價格比 buyPrice 小，buyPrice 就要被更新
  若 i 日的價格 - buyPrice 比過往的 profit 都要高，就更新 profit

  有用到一個 else if
  其實還是第一個用 min & max 的概念去求比較漂亮
`;

var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; ++i) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    } else if (prices[i] - buyPrice > profit) {
      profit = prices[i] - buyPrice;
    }
  }

  return profit;
};

const mySolution = `
  我的作法其實就是不要去管 sellPrice 和哪一天賣出 ，專心在 buyPrice & profit 的判斷，並用最大公差的方式出發，順序照著 loop 走其實不用想太多
`;

const ktSolution = `
  概念上其實就跟 solution1 一樣，語法不同而已
  Int.MAX_VALUE 當 minPrice 的初始值
  minOf & maxOf 就跟 Math.max & Math.min 一樣
`;

// class Solution {
//   fun maxProfit(prices: IntArray): Int {
//       var maxProfit = 0
//       var minPrice = Int.MAX_VALUE
//       for (p in prices) {
//           minPrice = minOf(minPrice, p)
//           maxProfit = maxOf(maxProfit, p - minPrice)
//       }
//       return maxProfit
//   }
// }
