# [692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)

- Associated with [Top K Frequent Elements](../../blind75/heap/top-k-frequent-elements.md)

## Solution: Hashmap (Mine)
```js
const topKFrequent = function(words, k) {
    let map = {};
    
    /** Count the frequency of the word. */
    for (let i = 0; i < words.length; i++) {
        let current = words[i];

        if (map[current] !== undefined) {
            map[current]++;
        } else {
            map[current] = 1;
        }
    }
    
    /** Reverse the key and value of hashmap. */
    /** To Sort the words with the same frequency by their lexicographical order */
    for (const [key, value] of Object.entries(map)) {
        if (map[value] !== undefined) {
            map[value].push(key)
            map[value].sort()
        } else {
            map[value] = [key];
        }
        
        delete map[key]
    }
    

    /** Transfer hashmap to array and sort by frequency. */
    /** Slice to get the Top K words. */
    return Object.entries(map)
      .sort((a,b) => b[0]-a[0])
      .map(o => o[1])
      .flat()
      .slice(0,k);
};
```

## Solution: Cleaner Hashmap
- TC: O(n log n)
  - n: for of
  - log n: sort
- SC: O(n) ?

1. Build a hash and count the frequency
2. Sort the hash using frequency or compare strings
   - Use `localeCompare` to compare lexicographical order.
3. Return the top k results

```js
const topKFrequent = function(words, k) {
  let hash = {};

  for (let word of words) {
    hash[word] = hash[word] + 1 || 1;
  }

  const result = Object.keys(hash)
    .sort((a,b) => {
      let countCompare = hash[b] - hash[a];
      // if a and b have the same frequency, compare their lexicographical order.
      if (countCompare == 0) return a.localeCompare(b);
      else return countCompare
    })

  return result.slice(0, k);
}
```

<!-- TODO: Review those two solution -->
## Solution: [Max Priority Queue](https://leetcode.com/problems/top-k-frequent-words/discuss/1549599/Javascript-Max-Priority-Queue-Solution-Explained)


## Solution: [MinHeap](https://leetcode.com/problems/top-k-frequent-words/discuss/993569/Javascript-MinHeap-Solution-with-T-O(N*LogK))
