# [2131. Longest Palindrome by Concatenating Two Letter Words](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/)

1. find the palindrome of each word.
   - ex: If "cl" and "ls" both exist, the palindrome length is at least 4.
2. hashmap store the reverse string of each word and count them.
Situation
1. word & reverse: "cl", "lc"
2  At least one reverse with some single double: "xx"
3. double pair: "xx", "xx"

## [Solution: Hash map](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/discuss/2641675/JavaScript-Easy-Understanding-and-Commented)
```js
const longestPalindrome = function (words) {
    const obj = {};
    let counter = 0;
    
    for(const word of words) {
        const reversedWord = word[1] + word[0];
     
        if(obj[word]) {
            obj[word]--;
            counter += 4;
        } else {
            obj[reversedWord] = obj[reversedWord] + 1 || 1;
        } 
    }
    
    // Handle with the single or additional double word, ex: 'xx'
    const checkDouble = Object.keys(obj).filter(str => obj[str] && str[1] + str[0] === str);
    
    if(checkDouble.length) counter += 2;
    
    return counter;
}
```

### Test Cases
```js
// Basic
["lc","cl","gg"]
["ab","ty","yt","lc","cl","ab"]
["cc","ll","xx"]
["lc"]
["bb"]

// I Failed at first.
["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]
["em","pe","mp","ee","pp","me","ep","em","em","me"]
```