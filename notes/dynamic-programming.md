# Dynamic Programing（動態規劃）
> 將問題分解成數個小問題，找到其中的規律，每次將小問題的答案記錄下來，當下一回來用到前一回合答案時就直接查表
> 用空間換取時間的解題方式
> = Divide-and-Conquer Method + Memoization

情境：尋找有很多重疊子問題的情況、複雜的計算且有規律的問題

作法
1. 找出規律
2. 製表
3. 查表

Examples
1. [dp](../blind75/hint/dp/)

---
### How is a dynamic programming algorithm more efficient than the recursive algorithm while solving an LCS problem?

`O(m * n)` vs `2max(m, n)`

減少 function call 的次數
 1. recursion 會 call 完每一次
 2. DP 則是會儲存值，到時候可以直接取用，而不用有多餘的 function call


## Floyd-Warshall Algorithm

## Longest Common Subsequence(LCS)


---

References
- https://medium.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/%E6%BC%94%E7%AE%97%E6%B3%95%E7%AD%86%E8%A8%98%E7%B3%BB%E5%88%97-dynamic-programming-%E5%8B%95%E6%85%8B%E8%A6%8F%E5%8A%83-de980ca4a2d3
- https://www.programiz.com/dsa/dynamic-programming
