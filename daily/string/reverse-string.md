# [344. Reverse String](reverse-string.md)

## Solution: Mine - Brutal
```js
var reverseString = function(s) {
    let len = s.length;

    for (let i = len - 1; i >= 0; i--) {
        s.push(s[i]);
    }
    
    for (let i = len - 1; i >= 0; i--) {
        s.shift();
    }

    return s;
};
```

## Solution: Two Pointer
```js
var reverseString = function(s) {
    let size = s.length;
    
    for (let i = 0; i < size / 2; i++) {
      // ES6 Destructuring assignment 
      [s[i], s[size - i - 1]] = [s[size - i - 1], s[i]]
    }
    
    return s;
};
```

## Solution: While Loop
```js
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    
    while (right > left) {
      [s[left], s[right]] = [s[right], s[left]]
      left++;
      right--;
    }
    
    return s;
};
```

## Solution: Recursive
```js
var reverseString = function(s) {
  reverse(0, s.length - 1);

  function reverse(i,j) {
    if (j > i) {
        [s[i], s[j]] = [s[j], s[i]]
        reverse(i + 1, j - 1)
    }

    return;
  }
}
```