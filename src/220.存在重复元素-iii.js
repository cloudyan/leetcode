/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// 两数之差 <= t 且 下标之差 <= k
// 滑动窗口 k
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const len = nums.length
  const len2 = Math.min(k, len - 1)
  for (let i = 0; i < len; i++) {
    for (let j = 1; i+j < len && j <= k; j++) {
      const diff = Math.abs(nums[i] - nums[i+j])
      // console.log(diff, nums[i], nums[i+j])
      if (diff <= t) return true;
    }
  }
  return false
};

// console.log(containsNearbyAlmostDuplicate([2,2], 3, 0))
// console.log(containsNearbyAlmostDuplicate([7,1,3], 2, 3))
// @lc code=end

