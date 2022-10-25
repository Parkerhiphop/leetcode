# 645. [Set Mismatch](https://leetcode.com/problems/set-mismatch/)
> #array #hashtable #bitmanipulation #sorting

Forget to think about missing num can be anywhere of the set.
- At first, I just think missing num would be `repeated num +1`.
- But it could be any num from `1~n`.

## Solution: Mine
- Use Map to find repeated num
- Use Set to find missing num

```js
var findErrorNums = function(nums) {
    nums.sort((a,b) => a - b);
    
    let repeatNum = 0;
    let missing = 0;

    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if (map.has(num)) {
            repeatNum = num;
        } else {
            map.set(num, num);
        }
    }
    
    const set = new Set(nums);
    
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) missing = i;
    }
    
    return [repeatNum, missing]
};
```

## [Solution: Use the typed Uint8Array()](https://leetcode.com/problems/set-mismatch/discuss/1089560/JS-Python-Java-C%2B%2B-or-(Updated)-Easy-O(1)-Space-Solution-w-Explanation)
- SC:  99.48%
- TC:  82.43%

<!-- TODO: Review it. -->

```js
var findErrorNums = function(nums) {
    let N = nums.length, dupe, sum = N * (N + 1) / 2,
        seen = new Uint8Array(N+1)

    for (let i = 0; i < N; i++) {
        let num = nums[i]
        sum -= num
        if (seen[num]) dupe = num
        seen[num]++
    }

    return [dupe, sum + dupe]
};
```

## Solution: Bit Manipulation - Use the typed Uint8Array()
- SC: O(1), 91.73%
- TC: , 87.08%

```js
const findErrorNums = function(nums) {
    let N = nums.length, ans = [,]

    for (let i = 0; i < N; i++)
        nums[(nums[i] - 1) % 10000] += 10000

    for (let i = 0; i < N; i++)
        if (nums[i] > 20000) ans[0] = i + 1
        else if (nums[i] < 10001) ans[1] = i + 1

    return ans
};
```

## Soluton: Sorting
- SC: 85.53%
- TC: 45.74%

```js
const findErrorNums = function(nums) {
    let len = nums.length;
//     Formula to calculate sum of Airthmetic series
    let sum = (len*(len+1))/2;
//     Now, just doing the other calculations required
    let s = 0, act = 0;
    let obj = {};
    for(let i of nums){
        if(obj[i]){
            act = i;
        }
        else{
            obj[i] = true;
            s+=i;
        }
    }
    return [act, sum - s];
    
};
```
