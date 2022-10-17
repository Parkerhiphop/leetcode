# [705. Design HashSet](https://leetcode.com/problems/design-hashset/submissions/)

- TODO: Check [BST](https://leetcode.com/problems/design-hashset/discuss/505766/JS-BST-as-a-Bucket), [LinkedList & Bit Manipulation](https://leetcode.com/problems/design-hashset/discuss/2576297/TypeScript-Design-HashSet-with-Linked-List) Solution

- JS Object is implemented with a hash table.
  - Objects in Javascript have constant insertion time, constant lookup time, and constant removal time.

## [What is HashSet?](https://stackoverflow.com/questions/24196067/what-is-the-javascript-equivalent-to-a-c-sharp-hashset)
- A HashSet and a Dictionary are very different.
- A Dictionary let's you retrieve the object.
- A HashSet doesn't let you retrieve the object but only tells you if one is there.

## [Solution](https://leetcode.com/problems/design-hashset/discuss/1969810/JS-or-Simple-and-Explained-or-Objects-greater-Hashset)
- Since hashSet doesn't retrieve value, we don't have to init value in MyHashSet.
- We just have to add it directly in `this`.

```js
var MyHashSet = function() {
};

MyHashSet.prototype.add = function(key) {
    this[key] = null;
};

MyHashSet.prototype.remove = function(key) {
    delete this[key]
};

MyHashSet.prototype.contains = function(key) {
    return this.hasOwnProperty(key)
};
```

## Solution: Mine
```js
var MyHashSet = function() {
    this.hashset = [];
};

MyHashSet.prototype.add = function(key) {
    if (!this.hashset.includes(key)) {
        this.hashset.push(key);
    }
};

MyHashSet.prototype.remove = function(key) {
    if (this.hashset.includes(key)) {
        let index = this.hashset.indexOf(key);

        this.hashset.splice(index, 1);
    }
};

MyHashSet.prototype.contains = function(key) {
    return this.hashset.includes(key)
};
```
