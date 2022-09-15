# Two pointer
https://medium.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/%E6%BC%94%E7%AE%97%E6%B3%95%E7%AD%86%E8%A8%98%E7%B3%BB%E5%88%97-two-pointer-%E8%88%87sliding-window-8742f45f3f55

常見於 Array 、String 或是 Linked-List 

情境：特定條件下的搜尋或是總和計算

作法：操作兩個 pointer 上的值，透過兩個指標的值再去做更多的運算或是判斷來解題。

---
## 左右指標
多用於 Array 或是 String。

設定左右兩個指標，在適當情況與條件下，移動其中的一個或兩個指標，來找到標值或是做一些總和的計算。而兩個指標的方向可以是同方向，也可以是反方向移動，端看當下的情境需求。

Examples
1. [Longest Substring Without Repeating Characters](/blind75//hint/string/longestSubstringWithoutRepeatingCharacters.js)
2. Remove Duplicates from Sorted Array
3. Remove Duplicates from Sorted Array II
4. Two Sum II — Input array is sorted
5. Minimum Size Subarray Sum
6. Squares of a Sorted Array

---

### Sliding Window
>   廣義的左右指標中的一種

Examples
1. [Container with most water](/blind75//hint//array//container-with-most-water.js)
2. [longest Repeating Character Replacement](/blind75//hint//string//longestRepeatingCharacterReplacement.md)
3. [minimum Window Substring](/blind75/hint/string/minimumWindowSubstring.md)

其實可以只使用一個 point 與 一個 window size 來實作，並不用真正使用到兩個指標。

作法：用 window 內的所有 element 來解題，例如透過每回合操作 window 內的總和，來達到解題的目的。


---
## 快慢指標 Fast and Slow Pointer
多用於 Linked-List 。

透過 slow 與 fast 兩根指標，讓兩個指標保持一定的間隔規律，通常可以用於解決以下幾種問題：
1. 找到 Linked-List 中心點
2. 找到 Linked-List 倒數第 K 個節點
3. 判斷一個 Linked-List 有沒有循環


### 找到 Linked-List 中心點
當你有兩個指標同時移動，慢的一次走一步，快的一次走兩步，當 fast pointer 抵達尾端的時候， slow pointer 就會是在中間的位置。

Examples:
1. Middle of the Linked List

### 找到 Linked-List 倒數第 K 個節點
先讓 fast pointer 先走 K 步，然後 Slow and Fast 兩個指標再使用一樣的速率前進，當 fast pointer 抵達尾端的時候， slow pointer 就會是在倒數第 K 個節點的位置。

Examples
1. Remove Nth Node From End of List
2. Rotate List


### 判斷一個 Linked-List 有沒有循環
當兩個 Fast and Slow Pointer 走的步數不一樣時，假如有一個循環的時候，兩個指標終究會遇上，就像賽跑被倒追一圈一樣類似的概念。

Examples
1. [Linked List Cycle](../blind75/hint/linked-list/linked-list-cycle.md)
2. Linked List Cycle II

---

# Greedy Algorithm

[Leetcode Questions](https://leetcode.com/tag/greedy/)
1. [Container with most water](/blind75//hint//array//container-with-most-water.js)
