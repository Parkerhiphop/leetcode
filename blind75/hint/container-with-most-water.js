const solution = `
  用整個容器往內縮的概念去想，而不是像我原本從單方向去找
  往內縮時，以不會漏水為前提去設計

  Math.min(height[i], height[j])
  - 找到容器的高度 -> 最小值
    - 高度 > 最小值時，水會漏

  (j-i)：容器寬

  Math.min(height[i], height[j]) * (j - i)
  - 容器高度 * 容器寬

  Math.max(ans, Math.min(height[i], height[j]) * (j - i))
  - 在 j > i 的情況下，不斷迭代出 容器高度 * 容器寬 的最大值，拿前一個 i 或 j 得出值去計算

  height[i] <= height[j]
  - 實現從兩邊去縮減的概念，宗旨是不能漏水
  - 若 i 的高度較高，就 j--，從 j 那邊往回找，因為只要 j 沒超過 i 的大小，就不會漏水
  - 反之，若 i 的高度較低或相等時，就 i++，往前去找到 i 不會漏水的高度
`;

var maxArea = function(height) {
  // j start from end (not from i + 1)
  let ans = 0, i = 0, j = height.length-1

  // j should always larger than i
  while (i < j) {
      // lowerY = Math.min(height[i], height[j])
          // 不預設立場哪邊比較低，start 低 或 end 低 都可以
      // AxoisX = j - 1
      // 容積 = lowerY * AxiosX;
      // ans 就是不斷地去迭代出 lowerY * AxiosX 最大的值
      // height[i] <= height[j]
          // 從兩邊去縮減的概念，宗旨是不能漏水
          // 若 i 的高度較高，就 j--，從 j 那邊往回找，因為只要 j 沒超過 i 的大小，就不會漏水
          // 反之，若 i 的高度較低或相等時，就 i++，往前去找到 i 不會漏水的高度
      
      ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
      height[i] > height[j] ? j-- : i++
  }
  return ans
};

const mySolution = `
  My solution can not handle start is smaller than end.
`;

var maxArea = function(height) {
  // a: (i, height[i]) b: (i + x, height[i + x]) 
  // output: maximum of x * (height[i + x] - height[i])    
  // a should have the larger height.
  
  let start = 1; // max height index
  let output = 0;

  for (i = 0; i < height.length; i++) {
      // But, we can't just find the larger start.
      // We should consider the maximun output.
          // end maybe larger than start.        
      if (height[i] > height[start]) {
          start = i;
      }
      
      for (j = start + 1; j < height.length; j ++) {
          const current = (j - start) * height[j];
          console.log(start, j, current)
          output = Math.max(current, output);
      }
  }
  
  return output;
};
