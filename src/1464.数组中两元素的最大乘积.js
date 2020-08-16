/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  nums = nums.sort((a, b) => a - b > 0 ? -1 : 1)
  // console.log(nums)
  return (nums[0] - 1) * (nums[1] - 1)
};

// console.log(maxProduct([3,4,5,2]))
// @lc code=end

