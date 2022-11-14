# [947. Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/description/)

## Solution: [Union Find](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/414826/clean-javascript-union-find-solution/)
<!-- TODO: Review again -->
```js
const removeStones = (stones) => {
  const parents = {};
  let n = 0;

  const find = (u) => {
    if (parents[u] == null) {
      n++;
      parents[u] = u;
    }
    else if (parents[u] !== u) parents[u] = find(parents[u]); // path compression
    return parents[u];
  };

  const union = (u, v) => {
    const p1 = find(u);
    const p2 = find(v);
    if (p1 !== p2) {
      parents[p1] = p2;
      n--;
    }
  };

  for (const [u, v] of stones) {
    union(u, ~v);
  }

  return stones.length - n;
};
```

## Solution: DFS - Not optimized yet
```js
const removeStones = stones => {
	const visited = new Set();
	let valid = 0;

  // find and remove stones that have same row and col
	const traverse = (row, col) => {
		const key = `${row}-${col}`;

		if (visited.has(key)) return;

		visited.add(key); // mark visited
		for (const [x, y] of stones) {
			// if row or col is same, should be removed
			if (row === x || col === y) traverse(x, y);
		}
	};

	for (const [x, y] of stones) {
		const key = `${x}-${y}`;

		if (visited.has(key)) continue;

		traverse(x, y);
		valid++;
	}

  // subtract number of valid nodes from total number of stones
	return stones.length - valid;
};
```

## Solution: [DFS with Explainaion](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/280508/javascript-dfs-solution-with-explanation-to-follow-through/)
