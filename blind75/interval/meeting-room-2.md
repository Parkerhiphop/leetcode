# (Meeting Room 2)[https://leetcode.com/problems/meeting-rooms-ii/]

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), `find the minimum number of conference rooms required`.
- Count the overlapping hours.

Example 1:

```
Input: 
[[0, 30],[5, 10],[15, 20]]

Output: 2
```

Example 2:

```
Input: [[7,10],[2,4]]
Output: 1
```

---

Associated with [Meeting Room](meeting-room.md)
- Meeting room don't care about multi-overlap, it return while overlap exists.
  - The Solution can simply compare previous and current interval.
- Meeting room 2 have to think about overlap of overlap.
- ex: `[0,6] [3,4] [5,10]` should return 3.
  - But if you only compare and count previous and current, you would only return 2.
  - `if (prev[1] > cur[1]) count++;`
  - `count = 6 > 3 (+1) + 4 < 5 (+0)  = 2;`

## Solution: Two Pointer!?
```js
const minMeetingRooms = (intervals) => {

  let sortByStart = intervals.sort((a,b) => a[0] - b[0]);

  let sortByEnd = [...intervals].sort((a,b) => a[1] - b[1]);

  let room = 0; // fast pointer for sorted start

  let j = 0; // end pointer for sorted end

  for (let i = 0; i < intervals.length; i++) {
    // Concept: Whenever there is a start meeting, we add one room.
    // Reuse: Before Adding room, we check if any previous meeting ends.
    // Check start with the first end. (j is initialize at 0.)
    if (start[i][0] < end[j][1]) {
      rooms++;
    } else {
      // start[i][0] > end[j][1]
      // If the start is bigger than end, it means the previous meeting ends and a room is empty.
      j++;
    }
  }

  return rooms;
}
```

## Solution: Hashmap and count the occupied times of hours
- Not sure it could pass all tests.
```js
const minMeetingRooms = (intervals) => {
  let hourMap = {};

  for(let i = 0; i < intervals.length; i++) {
    for (let j = intervals[i][0]; j <= intervals[i][1]; j++) {
      hourMap[j] ? hourMap[j] ++ : hourMap[j] = 1;
    }
  }

  return Math.max(...Object.values(hourMap))
}
```
