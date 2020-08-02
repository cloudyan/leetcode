/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length
  for (let i = 0; i < k; i++) {
    const temp = nums[len-1]
    for (let j = len-1; j > 0; j--) {
      nums[j] = nums[j-1]
    }
    nums[0] = temp
  }
};
// @lc code=end

