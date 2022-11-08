# [1544. Make The String Great](https://leetcode.com/problems/make-the-string-great/description/)

## Solution: Stack - O(n)
```js
var makeGood = function(s) {
    const stack = [''];

    for (const c of s) {
        let top = stack[stack.length - 1];
        if (top.toLowerCase() === c.toLowerCase() && top !== c) stack.pop();
        else stack.push(c);
    }

    return stack.join('')
};

```

## Solution: Neat with String Manipulation - O(n)
```js
var makeGood = function(s) {
  let chars = s.split('');
  let i = 0;

  while (i < chars.lenght - 1) {
    if (chars[i + 1].toLowerCase() === chars[i].toLowerCase() && chars[i] !== chars[i+1]) {
      chars.splice(i,2);

      if (i > 0) i--;
    } else {
      i++
    }
  }

  return chars.join('');
}
```

## Solution: Brutal - The worst
```js
var makeGood = function(s) {
    if (s.length === 1) return s;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i).charCodeAt() < 97) {
            count++;
        }
    }

    while(count) {
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i).charCodeAt() < 97) {
                if (s[i].toLocaleLowerCase() === s[i + 1]) {
                    s = s.slice(0, i) + s.slice(i + 2)
                    break;
                }
                if (s[i].toLocaleLowerCase() === s[i - 1]) {
                    s = s.slice(0, i - 1) + s.slice(i + 1);
                    break;
                }
            }
        }
        count--;
    }

    return s;
};
```
