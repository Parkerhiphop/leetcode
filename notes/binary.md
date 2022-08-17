# Binary

>在多數的語言中，位元運算子離硬體很近，速度非常快速，但在 JS 中，位元運算子與硬體的距離很遠，而且非常緩慢，又容易與邏輯運算子混淆，因此不建議使用。
> 
> From Javascript: The Good Parts 中文版 119頁


```js
// JS 中的二進位轉換

var number = 9;
var result = number.toString(2);	// result 為 1001
```

## Operator

「Javascript中的位元運算子](https://ithelp.ithome.com.tw/articles/10129361)

### Bitwise shift operators

`<<` [left-shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)

`a << b`
- Shifts the first operand the specified number of bits, modulo 32, to the left. Excess bits shifted off to the left are discarded.
- Zero bits are shifted in from the right.
- 在 把 a 往左移 b 個 bits，右邊補上 0
- 其實也等於 （a * 2 的 b 次方）

ex:
1. 5 << 2
  - 101 left shift 2 bits = 10100 = 20
  - = 5 * 2²
2. 5 << 3
  - 101 left shift 3 bits = 101000 = 40
  - = 5 * 2³
3. 8 << 2
  - 1000 left shit 2 bits = 100000 = 32
  - = 8 * 2²
4. -2 << 2
  - 11111111111111111111111111111101 left shift 2 bits = 11111111111111111111111111110111 = -8
  - = -2 * 2²

> Two’s complement
- Inverting (i.e. flipping) all bits, then adding a place value of 1 to the inverted number
- ex: 6 aka 0110
  - Inverting: 1001
  - Add 1: 1010
  - 1010 = 1*(-2³)+0*(2²)+1*(2¹)+0*(2⁰) = 1(-8) + 0 + 1(2) + 0 = -6.


`>>` [right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)

`a >> b`
- 把 a 往右移 b 個 bits，正數左邊補上 0，負數補上 1
- 其實也等於 （a / 2 的 b 次方） 取整數

ex:
1. 5 >> 2
  - 000101 right shift 2 bits = 000001 = 1
  - = 5 / 2²
2. 5 >> 3
  - 000101 right shift 3 bits = 000000 = 0
  - = 5 / 2³
3. 8 >> 2
  - 001000 right shit 2 bits = 000010 = 2
  - = 8 / 2²
4. -2 >> 2
  - 11111111111111111111111111111101 right shift 2 bits = 11111111111111111111111111111111 = -1

`>>>` unsigned right shift
- 同 `>>` 是把 a 右移 b 個 bits ，但正負數左邊都補上 0


### Binary bitwise operators

`&` bitwise AND
- bit1 & bit2 : 當兩個位元都是1時，回傳1。

`|` bitwise OR
- bit1 | bit2 : 其中一個位元是1時，回傳1。

`^` bitwise XOR
- bit1 ^ bit2 : 當兩個位元一樣時回傳0，不一樣時回傳1

`~`
- ~bit : 當bit是1的時候回傳0，bit是0的時候回傳1。


### Binary logical operators

`&&` logical AND

`||` logical OR

`??` Nullish Coalescing Operator

## 有號數字表示法 — 2 的補數、1 的補數 與 符號大小
- https://notfalse.net/20/signed-number-representations
- https://ithelp.ithome.com.tw/articles/10229609
- https://zh.wikipedia.org/zh-tw/%E6%B1%89%E6%98%8E%E6%9D%83%E9%87%8D