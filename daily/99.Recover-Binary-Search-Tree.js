/** see: https://leetcode.com/problems/recover-binary-search-tree/ */
// 這題是用陣列表示法的二元樹
// - 若節點索引為`i`：
//     - 節點的左子節點，放在陣列索引位置`(2 * i) + 1`。
//     - 節點的右子節點，放在陣列索引位置`(2 * i) + 2`。
//     - 若節點不為根節點，節點的父節點放在陣列索引位置`(i - 1) / 2`（取商）。
// 要解這題感覺要先會 把二元樹壓成 Array 的 function

var recoverTree = function (root) {
  // first and second are the two nodes that are swapped by mistake
  var prev, first, second;

  // 運用 recursion 的方式先跑完左邊的節點，得到了 prev 之後再跑右邊的，再複寫 prev
  function inorder(root) {
    // 最左邊的 root.left 會是 null
    // recursion 進來之後就會 return 斷開 recursion
    if (!root) return;

    // root 左邊沒有值之後就會結束這個 recursion 往下跑
    // 主要會是去把 prev = root & 跑右邊的，右邊的進來後，又會再重新跑它的左邊的 node
    inorder(root.left);

    // 簡單來說，能這樣做的原因是右邊不可能比左邊小，所以不斷 recursion 去找右邊比左邊小的值，找到就定為 first
    // prev.val > root.val -> prev = root.left 才會小於現在的 root.val
    // 但這個是在 inorder(root.right) 時才會執行，所以這個 root 就是錯的
    // 因為放進去的是 root.right 所以透過 inorder(root.left) 可以知道 prev 能抓到這個壞掉的 root
    if (prev && prev.val > root.val) {
      // Found a mistake
      if (!first) first = prev; // Only set the "first" once

      // 抓到 first 之後就是要找
      second = root; // Always update the "second"
    }

    prev = root; // 因為是 recursion，每次的 root 都是下一次的 prev

    inorder(root.right); // 跑右邊的是為了除錯，右邊如果進去跑了 first = prev 就代表這裡錯了
  }

  inorder(root);

  // Swap the values of the two nodes
  var temp = first.val;
  first.val = second.val;
  second.val = temp;
};

console.log(recoverTree([1, 3, null, null, 2]));
