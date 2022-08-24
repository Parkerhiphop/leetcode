const mostVotedSolution = `
  Time Complexity = O(N)
  Space Complexity = O(N)

  Same idea with my first thought, but it works, lol.
  
  The key is to use Map to get, set, and check(has) the start index.

  Use seen to keep track of the most recent index of each letter.
  - Why it would be the most recent?
    - Map's key cannot duplicate, so it only store the most recent while you loop over the string index.

  Use start to keep track of the starting index of current substring.
  - Every time you found a duplicate(seen.has()), make the start moves forward.
  - Why not start = i + 1;
    - It shouldn't be. "start" should be the next character, not the next value of the duplicate character.
    - For example: "abcadef"
      - "a" is duplicate -> "start" should be at the index of "b"( index of first "a" + 1 ), not index of the second "a" + 1
  - Why compare seen.get(s[i]) + 1 with "start"?
    - Make sure "start" can only move forward
    - For example: "abba"
      - while meet the second "a", seen.get(a) + 1 = 0 + 1 = 1, but the start is already 2 at the time.
      - start should not move backward.

  Use maxLen to keep track of the maximum substring by Math.max().
  - Compare its value with current index's length ( i - start + 1)
`;

var lengthOfLongestSubstring = function(s) {
  let seen = new Map();
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
      if(seen.has(s[i])) {
          start = Math.max(seen.get(s[i]) + 1, start);
      }
      seen.set(s[i], i);
      maxLen = Math.max(maxLen, i - start + 1);
  }
  
  return maxLen;
};

const reduceSolution = `
  Split the string to an array first, then you can use the reduce function to handle it.
`;

var lengthOfLongestSubstring = function(s) {
  const map = {};
  let left = 0;

  return s.split("").reduce((max, v, i) => {
    // map[v] would checkout if v is duplicate and v is greater than left.
    // same as "start = Math.max(seen.get(s[i]) + 1, start)" above.
    left = map[v] >= left ? map[v] + 1 : left;

    map[v] = i;

    return Math.max(max, i - left + 1);
  }, 0);
};

const mySolution = `
  (failed)
  First thought: Maybe hash map?
  Then, I choose the similar way to array.
  It turns out this way is correct, but my path is not accurate.
  I only can loop through index 0.
`;

var lengthOfLongestSubstring = function(s) {
  let charater = s[0];
  let ans = 0;
  let counter = 1;
  for (let i = 1; i < s.length; i++) {
      if (charater === s[i]) {
          ans = Math.max(ans, counter)
          charater = s[i + 1];
          counter = 1;
      } else {
          counter ++;
      }
  }s
  
  return ans;
};
