/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {}

  let maxNum = 0
  let res
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (typeof map[cur] === 'undefined') {
      map[cur] = 1
    } else {
      map[cur]++
    }
    if (maxNum < map[cur]) {
      maxNum = map[cur]
      res = cur
    }
  }
  return res
};
// @lc code=end

