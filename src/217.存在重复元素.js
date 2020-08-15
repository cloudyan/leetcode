/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i]
    if (typeof map[temp] !== 'undefined') return true
    map[temp] = true
  }
  return false;
};
// @lc code=end

