# [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

```js
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
```

## Solution
1. Store words as trie
2. Traverse trie using dfs

```js
const WordDictionary = function() {
  this.trie = {};
}

WordDictionary.prototype.addWord = function(word) {
  let root = this.trie;
  for (let i = 0; i < word.length; i++) {
    if (!root[word[i]]) root[word[i]] = {}
    root = root[word[i]];
  }

  root.isEnd = true;
}

WordDictionary.prototype.search = function(word) {
  return this.dfs(word, 0, this.trie);
}

WordDictionary.prototype.dfs = function(word, index, node) {
  if (index == word.length) return node.isEnd == true;

  if (word[index] == '.') {
    for (let key in node) {
      if (this.dfs(word, index + 1, node[key])) return true;
    }
  } else {
    if (node[word[index]]) {
      return this.dfs(word, index + 1, node[word[index]]);
    }
  }

  return false;
}
```

