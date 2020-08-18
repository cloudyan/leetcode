/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 左右两个子树的高度差的绝对值不超过 1
var sortedListToBST = function(head) {
  const arr = []

  if (head == null) return null;

  let current = head
  while (current !== null) {
    arr.push(current.val)
    current = current.next
  }

  return arrToBST(arr, true)
};

function arrToBST(arr = [], root) {
  const len = arr.length;

  if (len < 1) return;

  const midIndex = Math.ceil(len/2)
  const rightArr = arr.splice(midIndex)
  const mid = arr.pop()
  // console.log(mid, JSON.stringify(arr), JSON.stringify(rightArr))
  const tree = new TreeNode(mid, arrToBST(arr), arrToBST(rightArr))
  return tree
}
// @lc code=end

