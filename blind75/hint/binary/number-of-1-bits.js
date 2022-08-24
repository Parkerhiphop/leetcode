
const solution1 = `
  (not good enough, loop too many times, see while version below)
  n & 1 -> if n has 1, return 1
  n >>= 1 -> right shift 1 bit to take out the left-most 1
  ex: 11 >>= 1 -> 5 會從 8 bit -> 4 bit

  ex:
    n = 11
    count + (11 & 1 = 1) = 1
    n after left shift 5
    n = 5
    count + (5 & 1 = 1) = 2
    n after left shift 2
    n = 2
    count + (n & 1 = 0) = 0
    n after left shift 1
    n = 1
    count + (n & 1 = 1) = 3
    n after left shift 0
    ...until i < 32
`;

var hammingWeight = function(n) {
  let count = 0;
  
  for( let i=0 ; i < 32; i++ ){
      // console.log('n', n);
      // console.log('&', n & 1);
      count += n & 1;
      n >>= 1;
      // console.log('n after left shift', n)
  }
  
  return count
};

const solution2 = `
  (Better, only loop the times as same as hamming weight)
  use while loop
  use n & (n-1) to take out the left-most 1 of n each loop
  count += 1 while each take out
  until the n is 0 

  ex: n = 11
  while(11)
    n -1 = 10
    n = 11 & 10 = 10 (1011 / 1010)
    count + 1 = 1;
  while(10)
    n - 1 = 9
    n = 10 & 9 = 8 (1010 / 1001)
    count + 1 = 2;
  while(8)
    n - 1 = 7
    n = 8 & 7 = 0 (1000 / 0111)
    count + 1 = 3;
  while(0) -> break!
`;

// var hammingWeight = function(n) {
    
//     let count = 0;
    
//     while( n ){
//         // this will take out the right-most 1 of n    
//         n = n & (n-1);
//         // update counter
//         count += 1
//     }
    
//     return count
// };

const solution3 = `
  (same as my very first idea.)
  The key is to use Number() convert n first.
  Use .toString(2) to get the binary representation string of n.
  Instead of using split and reduce to get the sum. Using replace and Regex to remove 0.
  Finally, use string.prototype.length!
`;

var hammingWeight = function(n) {
  return Number(n).toString(2).replace(/0/g, '').length
};
