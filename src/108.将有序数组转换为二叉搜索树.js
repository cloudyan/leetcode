/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 二叉搜索树的中序遍历是升序序列
// 给定二叉搜索树的中序遍历，是否可以唯一地确定二叉搜索树？答案是否定的
// 如果增加一个限制条件，即要求二叉搜索树的高度平衡，是否可以唯一地确定二叉搜索树？答案仍然是否定的

// 中序遍历，总是选择中间位置左边的数字作为根节点
var sortedArrayToBST = function(nums) {
  return helper(nums, 0, nums.length - 1);
};

function helper(nums, left, right) {
  if (left > right) return null;

  // 总是选择中间位置左边的数字作为根节点
  let mid = Math.floor((left + right) / 2)
  // let mid = Math.ceil((left + right) / 2)

  const root = new TreeNode(nums[mid]);
  root.left = helper(nums, left, mid - 1);
  root.right = helper(nums, mid + 1, right);
  return root;
}

// @lc code=end

