# [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/)
> #hashtable #math #string

## Solution: Mine - Hashmap
```js
var intToRoman = function(num) {
    let result = '';
    let strings = num.toString().split('');
    
    const map = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M"
    };

    // if I use division(%), it would be simpler.
    for (let i = 0; i < strings.length; i++) {
        let current = strings[i];

        let romankey = (10 ** (strings.length - 1 - i)) || 1
        
        if (9 > current && current >= 5) {
            current -= 5;
            result += map[romankey * 5];
        }

        if (['4','9'].includes(current)) {
            romankey *= current;
            result += map[romankey]
        } else {
            result += map[romankey].repeat(current)
        }
    }
    
    return result;
};
```

## Solution: Beats 99.5%
```js
const symbolToValue = {
    "M" : 1000,
    "CM": 900,
    "D" : 500,
    "CD": 400,
    "C" : 100,
    "XC": 90,
    "L" : 50,
    "XL": 40,
    "X" : 10,
    "IX": 9,
    "V" : 5,
    "IV": 4,
    "I" : 1,
}

var intToRoman = function(num) {
    let finalStr = "";
    for (s in symbolToValue){
        const v = symbolToValue[s];
        while (num >= v){
            num -= v;
            finalStr += s;
        }
    }
    return finalStr;
};
```

## Solution: Clean with array

Using a lookup table.

```js
const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

const intToRoman = function(num) {
  let ans = '';
  for (let i = 0; num; i++)
    while (num >= val[i]) ans += rom[i], num -= val[i];
  return ans;
}
```

## Solution: Clean with hashmap
```js
function intToRoman(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';
    Object.entries(map).forEach(([letter, n]) => {
        result += letter.repeat(Math.floor(num / n));
        num %= n;
    });
    return result;
}
```
