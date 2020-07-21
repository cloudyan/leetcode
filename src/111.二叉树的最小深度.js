/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
// 递归 DFS
var minDepth = function(root) {
  if (!root) return 0
  if (root.left == null && root.right == null) return 1

  let min_depth = Number.MAX_SAFE_INTEGER;
  if (root.left != null) {
    min_depth = Math.min(minDepth(root.left), min_depth);
  }
  if (root.right != null) {
    min_depth = Math.min(minDepth(root.right), min_depth);
  }

  return min_depth + 1;
};

// var minDepth = function(root) {
//   if (!root) return 0
//   if (root.left == null && root.right == null) return 1

//   if (root.left && !root.right) return 1 + minDepth(root.left)
//   if (!root.left && root.right) return 1 + minDepth(root.right)
//   return 1 + Math.min(minDepth(root.left), minDepth(root.right))
// };
// @lc code=end

