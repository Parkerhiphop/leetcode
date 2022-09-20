
const concept = `
  What is the rule of reverse a binary bits?
`;

const iteratedSolution = `

`;

var reverseBits = function(n) {
  var result = 0;
  var count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};

const oneLinerSolution = `
  1. binaryN = n.toString(2)
  - n 為一般數字， ex: 43261596
  - 所以需要先用 .toString(2) 把 n 轉為 binary
  
  2. reverseBinaryN = x.split("").reverse().join("")
  - 
  
  3. paddingReverseBinaryNWithZero = reverseBinaryN.padEnd(32, "0")
  - 
  
  4. reverseBits = Number.parseInt(paddingReverseBinaryNWithZero, 2)
  - 
`;

var reverseBits = function(n) {
  return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
};