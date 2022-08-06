/**
 * @note
 * LCS 問題
 */

var minDistance = function(word1, word2) {
  let word1Arr = word1.split('');
  let word2Arr = word2.split('');

  let DP = new Array(word1Arr.length+1);
  for (var i = 0; i < word1Arr.length+1; i++) {
      DP[i] = new Array(word2Arr.length+1).fill(0);
  }

  // 感覺是逐個比較（？
  for(var i=0; i<=word1Arr.length; i++){
      for(var j=0; j<=word2Arr.length; j++){
          if(i==0){
              DP[i][j] = j; // 00 = 0 01=1 02=2...
          }else if(j==0){
              DP[i][j] = i; // 
          }else if(word1Arr[i-1] == word2Arr[j-1]){
              DP[i][j] = DP[i-1][j-1];
          }else{
              DP[i][j] = 1 + Math.min(DP[i-1][j], DP[i][j-1]);
          }
      }   
  }
  console.log(DP)
  return DP[word1Arr.length][word2Arr.length];
};

function minDistanceTS(word1, word2) {
  //base condition of empty string is 0
  //compare every letter in two strings

  const l1 = word1.length;
  const l2 = word2.length;

  const dp = new Array(l1 + 1)
    .fill(0)
    .map(() => new Array(l2 + 1).fill(0));

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        //if match, set to previous match for letter at both words
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // if no match, set to best match of removing a letter from either word
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  console.log(dp);

  const maxSubLen = dp[l1][l2];

  console.log('maxSubLen', maxSubLen)
  return l1 + l2 - 2 * maxSubLen;
}

console.log(minDistance('abcde', 'be'));
console.log(minDistanceTS('abcde', 'be'));
