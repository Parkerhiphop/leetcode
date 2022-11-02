# [433. Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
> #bfs

I was mislead by the related topic of hashmap.
This question should be solved by BFS or with queue.

My blind spot: The `start` would change, we have to calculate the minimum based on the new start.

As, we need to mutate the `start` string, and start from the new `start`.
The Steps are on below:
1. Use the `tempBank` to store bank and delete everytime we mutate.
2. Use `geneChars` to mutation the `start` string.
3. Use `queue` to record mutation and steps and return the steps while the `mutation` string is equal to the `end` string.

## Solution: Simple w/ Queue
```js
const minMutation = function(start, end, bank) {
  let tempBanks = new Set(bank);
  let geneChars = ['A', 'T', 'C', 'G']
  let queue = [[start, 0]];

  if (!tempBanks.has(end)) return -1;

  while (queue.length > 0) {
    let [current, steps] = queue;
    if (current === end) return steps; // once the `current` is equal to `end`, return the minimum steps here.

    for (let i = 0; i < 8; i++) {
      for (let g = 0; g < 4; g++) { // mutation the start everytime.
        if (current[i] === geneChars[g]) continue; // if equal, we don't have to mutate.
        let mutation = current.slice(0, i) + geneChars[g] + current.slice(i+1);
        if (tempBanks.has(mutation)) { // Only if bank has the mutation string, we caculate the steps.
          queue.push([mutation, steps + 1]) // reset the queue, so we would start from mutation string next time.
          tempBanks.delete(mutation); // Delete the mutation from banks everytime.
        }
      }
    }
  }

  return -1;
}
```
