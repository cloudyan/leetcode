/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */

// 对于非负数成绩，且都不相同时，可以使用坑位法O(n)排序
// 多少分就排多少位
// 空间复杂度 O(Max(n))
var findRelativeRanks = function(nums) {
  const max = Math.max.apply(null, nums)

  let numsIndex = []

  for (let i = 0; i < nums.length; i++) {
    numsIndex[nums[i]] = i
  }

  let res = []
  // 使用一次变量，直接处理好
  // numsIndex = numsIndex.filter(item => typeof item !== 'undefined').reverse()

  let rank = 1;
  for (let i = numsIndex.length; i >= 0; i--) {
    const cur = numsIndex[i]
    if (cur >= 0) {
      if (rank == 1) res[numsIndex[i]] = 'Gold Medal'
      else if (rank == 2) res[numsIndex[i]] = 'Silver Medal'
      else if (rank == 3) res[numsIndex[i]] = 'Bronze Medal'
      else res[numsIndex[i]] = ''+rank;
      rank += 1;
    }
  }

  return res;
};
// @lc code=end

