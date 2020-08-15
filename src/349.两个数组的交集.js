/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 交集 并集 差集
var intersection = function(nums1, nums2) {
  const temp = new Set(nums2)
  return [...new Set(nums1)].filter(item => temp.has(item))
};
// @lc code=end

