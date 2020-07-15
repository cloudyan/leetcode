/*!
 * @Author: cloudyan <cloudcode@qq.com>
 * @Date: 2020-07-15 23:18:57
 * 功能说明:
 */

/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;

  if (nums.length < 2) return nums;

  for (let k = 1; k < nums.length; k++) {
    if (nums[i] != nums[k]) {
      nums[++i] = nums[k]
    }
  }

  nums.length = i + 1
  // console.log(nums, i)

  return nums.length
};
// @lc code=end

