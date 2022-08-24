const mySolution = `
  The question is to return an array that ans[i] is number of 1's in the binary representation of i.
  So implement a function(getNumOf1bits) to get the number of 1 bits first.
  Then, loop and push the value from getNumOf1bits(i).
`;

var countBits = function(n) {
  function getNumOf1bits(x) {
      let count = 0;
      
      while (x) {
          x= x & (x-1);
          count += 1;    
      }
      
      return count;
  }    

  let ans = [];

  for (let i = 0; i <= n; i++) {
      ans.push(getNumOf1bits(i));        
  }
  
  return ans;
};


const mostVotedSolution = `
  The mathematical way.
  see https://leetcode.com/problems/counting-bits/discuss/1808435/Python-Javascript-Very-Deep-Explanation 
`;

var countBits = function(n) {
  let result = Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }

  return result;
};


const intuitiveSolution = `
  Same as my solution, but cleaner.
  Instead of using getNumOf1bits(n), converting the binary representation of i to string then get the number of 1's in one line. 
`;

var countBits = function(n) {
  let bits = [];
  for (let i = 0; i <= num; i++)
      // remove 0 from bits
      bits.push(Number(i).toString(2).replace(/0/g, '').length);
  return bits;
};
