# [1335. Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/)

## Solution: DP with Explanation
```js
var minDifficulty = function(jobDifficulty, d) {
  // if we don't have enough jobs for the number of days return -1;
  if (jobDifficulty.length < d) return -1;

  // initialize the cache that will have the key of starting index
  // and number of days
  // the value will be the value of the max for the current job plus the
  // minimum total of all days after
  const cache = {};

  // Depth First Search using a bottom up approach
  // We want to return the minimum total difficulty for each starting index
  // corresponding to each number of days left
  const dfs = (start, numDays) => {

    // if we have used all of our days and we have reach the end of jobs
    // return 0
    // if we have used all our days but haven't finished all our jobs
    // return Infinity because we didn't complete all of our jobs (result is invalid)
    if (numDays === d) {
      return start === jobDifficulty.length ? 0 : Infinity
    }

    // create a unique key for our cache for each depth
    const key = `${start}-${numDays}`
    // if the key is in the cache return the value
    if (cache[key] !== undefined) return cache[key];

    // calculate the last index for this day's number
    // if we go beyond that index we will have more days than jobs
    const end = jobDifficulty.length - d + numDays;

    // result will hold the minimum total of all following days
    let result = Infinity;
    // max will hold the max for the current day
    let max = -Infinity

    // iterate through the jobs updating the max and searching the remainder
    // of jobs and days
    for (let i = start; i <= end; i++) {
      max = Math.max(max, jobDifficulty[i]);
      result = Math.min(result, max + dfs(i + 1, numDays + 1));
    }

    // save the result in the cach and return it;
    return cache[key] = result;
  }
  return dfs(0, 0);
};
```

## Solution: DFS
```js
const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;
  const cache = new Map();
  return helper(0, d);

  function helper(idx, count) {
    const key = idx * 100 + count;
    if (!cache.has(key)) {
      if (count === 1) {
        let max = 0;
        for (let i = idx; i < LEN; ++i) {
          jobDifficulty[i] > max && (max = jobDifficulty[i]);
        }
        return max;
      }
      let min = 10000;
      let curMax = 0;
      for (let i = idx; i <= LEN - count; ++i) {
        if (jobDifficulty[i] > curMax) curMax = jobDifficulty[i];
        min = Math.min(min, curMax + helper(i + 1, count - 1));
      }
      cache.set(key, min);
    }
    return cache.get(key);
  }
};
```

## Solution: 2D DP
```js
const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;
  const dp = Array.from({ length: LEN }, () => new Uint16Array(d + 1).fill(10000));

  for (let i = LEN - 1, curMax = 0; i >= 0; --i) {
    jobDifficulty[i] > curMax && (curMax = jobDifficulty[i]);
    dp[i][1] = curMax;
  }

  for (let i = 2; i <= d; ++i) {
    for (let j = 0; j <= LEN - i; ++j) {
      let max = 0;
      for (let k = j; k <= LEN - i; ++k) {
        jobDifficulty[k] > max && (max = jobDifficulty[k]);
        dp[j][i] = Math.min(dp[j][i], dp[k + 1][i - 1] + max);
      }
    }
  }

  return dp[0][d];
};
```

## Solution: DP with DFS
```js
const minDifficulty = (jobDifficulty, d) => {
  const len = jobDifficulty.length;
  if (len < d) return -1;
  const dp = new Unit16Array(len + 1); // why unit16?

  for (let i = len -1; i >= 0; --i) {
    dp[i] = jobDifficulty[i] > dp[i + 1] ? jobDifficulty[i] : dp[i + 1];
  }

  for (let i = 2; i <= d; ++i) {
    for(let j = 0; j <= len - i; ++j) {
      let max = 0;
      dp[j] = 10000;

      for (let k = j; k < len - il ++k) {
        jobDifficulty[k] > max && (max = jobDifficulty[k]);
        dp[j] > dp[k + 1] + max && (dp[j] = dp[k + 1] + max);
      }
    }
  }

  return dp[0]
}
```

## Solution: Dp with Monotonic stack
```js
const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;

  const dp = new Uint16Array(LEN);
  dp[0] = jobDifficulty[0];
  for (let i = 1; i < LEN; ++i) {
    dp[i] = jobDifficulty[i] > dp[i - 1] ? jobDifficulty[i] : dp[i - 1];
  }

  for (let i = 1; i < d; ++i) {
    const stack = [];
    let old = dp[i - 1];
    for (let j = i; j < LEN; ++j) {
      let min = old;
      old = dp[j];
      while (stack.length && jobDifficulty[stack[stack.length - 1]] <= jobDifficulty[j]) {
        const top = stack.pop();
        min = Math.min(min, dp[top] - jobDifficulty[top]);
      }
      dp[j] = min + jobDifficulty[j];
      if (stack.length) {
        const top = dp[stack[stack.length - 1]];
        top < dp[j] && (dp[j] = top);
      }
      stack.push(j);
    }
  }

  return dp[LEN - 1];
};
```

## Solution: Mine (failed)
- fail case: [7,1,7,1,7,1], d=3
- I don't know why the answer is '15', instead of '9'(`[7,7,7,1],[1],[1]`)

```js
var minDifficulty = function(jobDifficulty, d) {
    if (jobDifficulty.length < d) return -1;
    if (jobDifficulty.length === d) return jobDifficulty.reduce((accum, cur) => accum + cur, 0);
    
    jobDifficulty.sort((a,b) => b - a);
    
    let min = 0;
    
    for (let i = 1; i < d; i++) {
        min += jobDifficulty.pop();
    }
    
    min += jobDifficulty[0];
    
    return min;
};
```
