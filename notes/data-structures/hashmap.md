# Hash Map
> Hashtable is a data structure that maps keys to values
- Store data in an array-like format, using key/value pairs, where the (hashed) key corresponds to the index in the array.

## How it works?
Implement with Objects or Maps in JavaScript.

[JS - Objects vs. Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps)
> Overall, Hashmaps offer greater flexibility
1. Accidental Keys	
2. Key Types
3. Key Order
4. Size
5. Iteration
6. Performance
7. Serialization and parsing	

> Note: Map in JS cannot be directly translated to JSON

More Reference: [ES6 — Map vs Object — What and when?](https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373)


[Hashmap vs Hashtable](https://stackoverflow.com/questions/36598093/hash-table-and-hash-map-in-javascript)
> "HashMap" and "Hashtable" are just class names defined by the JDK, they do not necessarily correspond to particular hashing algorithms
- JavaScript does not have separate "HashMap" and "Hashtable" concepts, because they don't need them.
- Java needed to create a separate HashMap class because the Hashtable contract was problematic and couldn't be safely corrected.

## When to use?
- When you need to store the previous value and take it with O(1) time complexity.

## What to resolve?
1. [Two Sum](../../blind75/array/twoSum.md)
2. [Valid Anagram](../../blind75/string/validAnagram.md)
3. [Check if the Sentence Is Pangram](../../daily/string/checkIfPangram.md)
4. [Contains Duplicate II](../../daily/array/containsDuplicate2.md)
5. [Group Anagrams](../../blind75/string/groupAnagrams.md)
6. [Top K Frequent Elements](../../blind75/heap/topKFrequentElements.md)
7. [Meeting room 2](../../blind75/interval/meetingRoom2.md)
8. [Longest Palindrome by Concatenating Two Letter Words](../../daily/string/longestPalindrome.md)
9. [Integer to Roman](../../daily/string/intToRoman.md)
10. [Top K Frequent Words](../../daily/heap/topKFrequentWords.md)

## Reference
1. [Data Structures in JavaScript: Arrays, HashMaps, and Lists](https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMaps)
