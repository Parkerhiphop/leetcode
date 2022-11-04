# 1. Two Sum
> #array #hashmap

## Solution: Hash map
- TC: O(n)
- SC: O(n)

Reference: [Hash Map](../../notes/data-structures/hashmap.md)

### Map
```js
const twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [i, map.get(nums[i])]
        } else {
            map.set(target-nums[i] ,i)
        }
    }
}
```

### Object
```js
const twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[target - num] !== undefined) {
      return [hash[target - num], i];
    }
    hash[num] = i;
  }
};

const twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
      if (obj.hasOwnProperty(target - nums[i])) {
          return [obj[target - nums[i]], i];
      }

      obj[nums[i]] = i;
  }
};
```

## Logs
`ex: nums = [3,2,4] and target = 6`
1. i = 0
     - obj[3] = 0;
     - obj = { 3: 0 };
2. i = 1
     - obj[2] = 1;
     - obj = { 3: 0, 2: 1 };
3. i = 2
     - return [obj[2], 2] aka [1, 2];
