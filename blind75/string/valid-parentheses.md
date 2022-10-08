# [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

- Use the `Stack` data structure.

## Solution: Mine (Unintentionally use the stack  only push the left)
- Took me 50 mins = =.

```js
var isValid = function(s) {    
    let arr = [s[0]]; // could rename to 'stack'
    
    // Use hashmap is better (see below).
    let brackets = [
        ['[',']'],
        ['{','}'],
        ['(',')'],
    ]

    for (let i = 1; i <= s.length - 1; i++) {
        let prev = arr[arr.length - 1];
        let curr = s[i];
        
        for (let j = 0; j < brackets.length; j++) {
            if (curr === brackets[j][1]) {
                if (prev === brackets[j][0]) {
                    arr.pop();
                } else {
                    return false;                
                }
            }
        }
        if (curr === '(' || curr === '{' || curr === '[') {
            arr.push(s[i])            
        }
    }
    
    return arr.length === 0;
};
```

Output
```js
"({[]})"

[ '(' ]
[ '(', '{' ]
[ '(', '{', '[' ]
[ '(', '{' ]
[ '(' ]
```

## Solution: Use stack (Only push the right part.)
```js
var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};
```

Output
```js
"({[]})"

[]
[ ')' ]
[ ')', '}' ]
[ ')', '}', ']' ]
[ ')', '}' ]
[ ')' ]
```

## Solution: Cleaner (Replace my brackets array to a map.)
```js
var isValid = function(s) {
  const stack = [];

  const map = {
      '(': ')',
      '[': ']',
      '{': '}'
  }

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (map[curr]) {
      stack.push(map[curr])
    } else if (curr !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
}
```

