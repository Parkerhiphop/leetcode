/**
 * @Question
 * 移除最少的 () aka parentheses 來讓 output 是一個合法字串
 * @Reference https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 * @Concept
 * 將字串轉為陣列，找到一個 ( ＋ 一個 ) 就當沒事，有多的就各自把它從陣列的位置中移除
 *  有多的 ( 透過 Loop stack[] 來一次清除
 *  有多的 ) 就直接在第一個 loop 從 str[] 清除
 * @OutputLimitExceeded
 * 第二個 iterator 不要用 for loop 而是用 for of 就可以了
 * @Note for loop vs forEach vs for...in vs for...of
 */
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  // 1. 先把字串轉成陣列 -> split("")
  let str = s.split("");
  let stack = [];
  for(i=0;i<str.length;i++){
    if (str[i] === "(") {
      // 2. 把字串陣列中的 ( index 組成一個陣列
      stack.push(i)
    } else if (str[i] === ")") {
      // 3. stack 有值 = 前面有 ( 就把陣列的值去掉一個 -> 組成一隊
      if (stack.length) stack.pop()
      // 4. 只有 ) 沒有在前面找到 ( 的話，直接 reassign 掉那個字串
      else str[i] = ""
    }
  }

  // 5. 有多的 ( 在這邊統一 reassign 掉!
  // for loop 會 output limit excess
  // for(i=0;i<stack.length;i++) {
  //   str[stack[i]] = ""
  // }

  // 有點像 forEach 都是在遍歷整個 stack  
  for(let i of stack) str[i] = "";


  // 6. 把含有多餘的 ( 或 ) 的 str[] 清好後，再 join 成字串
  return str.join("")
};