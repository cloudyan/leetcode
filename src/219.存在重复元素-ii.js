/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
  const map = {}
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i]
    if (typeof map[temp] === 'undefined') {
      map[temp] = i;
    } else {
      if (i - map[temp] <= k) return true
      map[temp] = i;
    }
  }
  return false
};
// @lc code=end

