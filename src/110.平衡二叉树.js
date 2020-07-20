/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 自顶向下的递归
// 计算 height 存在大量冗余。每次调用 height 时，要同时计算其子树高度
// var isBalanced = function(root) {
//   if(!root) return true
//   if (Math.abs(height(root.left) - height(root.right)) > 1) return false
//   return isBalanced(root.left) && isBalanced(root.right)
// };

// function height(node) {
//   if(!node) return 0
//   return 1 + Math.max(height(node.left), height(node.right))
// }

// 自底向上递归
// 思路是对二叉树做先序遍历，从底至顶返回子树最大高度，
// 若判定某子树不是平衡树则 “剪枝” ，直接向上返回
var isBalanced = function(root) {
  return recur(root) != -1;
};

// 1. 递归返回值
// 2. 递归终止条件
function recur(root) {
  if (root == null) return 0;
  const left = recur(root.left);
  if(left == -1) return -1;
  const right = recur(root.right);
  if(right == -1) return -1;
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}

// @lc code=end

