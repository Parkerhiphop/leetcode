
const concept = `
  這題需要先熟悉二進位制的加減
  接著是 JS 的二進位 Operator
  再來是理解 a & b, a ^ b, carry << num 代表的概念

  a & b 求進位的 bit(carry)
  -> 當 a 和 b 的 bit 都是 1 的時候，該 bit 會回傳 1 （代表那裡是需要進位）
  -> 二進位制的加減就是 1 + 1 = 0 With Carry = 1
  需要進位的值在電腦科學上被稱為 carry
  所以這邊可表示為 carry = a & b

  a ^ b 將 a, b 的 bit 合併，或是求不用進位的尾數
  -> a ^ b 的概念是 1 / 0 不一樣的才要保留，一樣的會被捨棄（變成 0）
  -> 而一樣的都會被 a & b 拿去進位了，所以這邊要嘛是最後要加總，不然就是找出當前的尾數

  | 透過 a & b 知道哪些 bit 是需要進位的之後，使用 carry << num 的概念

  carry << num
  -> 將 carry 左移（進位） num 個位置
  -> 因為這邊都是進位 1 所以直接寫成 carry << 1
`;

const recursiveSolution = `
  不斷迭代 a = a ^ b(尾數＋總進位值) 和 b = (a & b) << 1(進位值)
  而在一次次的迭代中，需要進位的值會慢慢進位掉，最後沒有需要進位的值時，b 就會是 0
  b 沒得進位後 0 << 1 = 0
  a 為上一次的 a ^ b 的結果（尾數＋最後一個進位的 bit）
`;
var getSum = function(a, b) {
    return b ? getSum(a ^ b, (a & b) << 1) : a;
};

const solutionWithWhileLoop = `
  ex: 4 + 7
  while(7)
  carry = 4 & 7 = 4(兩邊都有4，4 是要進位的 bit)
  a = 4 ^ 7 = 3 (要進位的 4 被去掉，留下 3)
  b = 4 << 1 = 8（4 bit 進位到 8 bit）
  
  while(8)
  carry = 4 & 8 = 0 (進完位後，a & b 已經不再有交集)
  a = 3 ^ 8 = 11 (合併 尾數 3 ^ 進位後的 8 的 二進位碼)
  b = 0 << 1 = 0 (沒有要進位的值了，0 進位依然是 0)
  
  while(0) -> 沒有要進位的值，跳出迴圈

  answer = a = 11 (進位完的 b ^ 不用進位的尾數 a = 最終的答案)
`

var getSum = function(a, b) {
  let carry;
  
  while(b) {
      carry = a & b;
      a ^= b;
      b = carry << 1;
  }
  
  return a;
};
