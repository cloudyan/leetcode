/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针
var moveZeroes = function(nums) {
  let times = [];

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    if (cur === 0) {
      times.push(i)
    } else {
      if (times.length) {
        const index = times.shift()
        nums[index] = cur
        nums[i] = 0
        times.push(i)
      }
    }
  }

  return nums;
};
// @lc code=end

