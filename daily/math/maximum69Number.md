# [1323. Maximum 69 Number](https://leetcode.com/problems/maximum-69-number/description/)

## Solution: Convert to String and Replace The First 6
```js
var maximum69Number  = function(num) {
  return Number(num.split('').replace('6', '9'));
};
```

## Solution: Math
```js
const maximum69Number = num => {
  if (num / 1000 << 0 === 6) return num + 3000;
  if ((num / 100 << 0) % 10 === 6) return num + 300;
  if (num % 100 / 10 << 0 === 6) return num + 30;
  if (num % 10 === 6) return num + 3;
  return num;
};
```

## [Solution: Enumerate - Beats 92.55%](https://leetcode.com/problems/maximum-69-number/solutions/484939/javascript-easy-to-understand-3-solutions/?languageTags=javascript)
```js
const map = {
  6: 9,
  9: 9,
  66: 96,
  69: 99,
  96: 99,
  99: 99,
  666: 966,
  669: 969,
  696: 996,
  699: 999,
  966: 996,
  969: 999,
  996: 999,
  999: 999,
  6666: 9666,
  6669: 9669,
  6696: 9696,
  6699: 9699,
  6966: 9966,
  6969: 9969,
  6996: 9996,
  6999: 9999,
  9666: 9966,
  9669: 9969,
  9696: 9996,
  9699: 9999,
  9966: 9996,
  9969: 9999,
  9996: 9999,
  9999: 9999
};
const maximum69Number = num => map[num];
```

## Solution: Greedy
```js
var maximum69Number  = function(num) {
    let nums = num.toString().split('');
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == '6'){
            nums[i] = '9';
            break;
        }
    }
    return +nums.join('');
};
```
