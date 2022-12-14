# Meeting Room
> [Reference](https://javascript.plainenglish.io/javascript-algorithms-meeting-rooms-leetcode-2385465b92f0)

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine `if a person could attend all meetings.`

## Example 1:

```js
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

Note: 0~30 coverage over 5~10, 15~20. The person can only attend [0,30] or [5,10], [5,15] at a time.
```


## Example 2: 
```js
Input: intervals = [[7,10],[2,4]]
Output: true
```

> Actually, the question is to check if interval overlap.


## Solution: Iterate through the intervals array and create a `Set` with all busy minutes.

The time complexity is O(n * m)
- where n is the number of intervals and m is the difference between starti and endi.

The space complexity is O(n)
- where n is the number of all differences between starti and endi.

```js
const canAttendMeetings = (intervals) => {
  const times = new Set();

  for (let i = 0; i < intervals.length; i++) {
    for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
      if (times.has(j)) {
        return false;
      } else {
        times.add(j);
      }
    }
  }

  return true;
};
```

```js
/** Explanation */
Example 1

[[0,30], [5,10], [15,20]]
1 [0,30] set = 0,1,2,...30
2 [5, 10] 5 in set // return false

Example 2

[[7,10], [2,4]]
1 [7,10] set = 7,8,9,10
2 [2,4] set = 2,3,4,7,8,9,10 // return true because all minutes were unique
```

## Solution: Sort by start first: O(nlogn)
- Sort and space complexity is O(n).

- If starting hours [i] are less than [i-1], then the meeting hour is overlapping.

```js
const canAttendMeetings = (intervals) => {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i-1][1] > intervals[i][0]) return false;
  }

  return true;
};
```


