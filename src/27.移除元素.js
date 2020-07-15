/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== val) {
      nums[i] = nums[k]
      i++
      // console.log(nums, i)
    }
  }
  nums.length = i
  return nums.length
};
// @lc code=end

