# [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

## Trie
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.

There are various applications of this data structure, such as `autocomplete` and `spellchecker`.



```js
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

## Solution
1. Store the entire trie in an object
2. Each node is an object that uses character as keys to connect to other characters
3. Set isEnd to true for the last character node in a word

```js
const Trie = function() {
  this.root = {};
}

Trie.prototype.insert = function(word) {
  let node = this.root;
  word.split('').forEach((char) => {
    if (!node[char]) node[char] = {};
    node = node[char]
  })

  node.isEnd = true;
}

Trie.prototype.search = function(word) {
  let node = this.searchNode(word);
  return node !== null ? node.isEnd == true : false;
}

Trie.prototype.startsWith = function(word) {
  let node = this.searchNode(word);
  return node !== null;
}

Trie.prototype.searchNode = function(word) {
  let node = this.root;

  for (let char of word.split('')) {
    if (node[char]) {
      node = node[char];
    } else {
      return null;
    }
  }

  return node;
}
```
