/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let cur = nums[0]
  let max = cur

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(cur + nums[i], nums[i])
    max = Math.max(cur, max)
  }
  return max
};
// @lc code=end

