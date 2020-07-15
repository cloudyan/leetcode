/*!
 * @Author: cloudyan <cloudcode@qq.com>
 * @Date: 2020-07-15 11:31:56
 * 功能说明:
 */

/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]

    // tempObj[diff] = index
    if (typeof map[current] === 'undefined') {
      map[target - current] = i
    } else {
      return [map[current], i]
    }
  }
};
// @lc code=end

