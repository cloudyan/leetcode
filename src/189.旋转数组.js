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

// 每次遍历移动一位，遍历 k 次
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

// 对 k 用 len 求余 直接移动 k 位，循环移动

// @lc code=end

