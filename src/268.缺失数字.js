/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 只有 n个数，内部是 0 ~ n-1,注意题设描述上有问题
var missingNumber = function(nums) {
  const temp = {}
  let len = nums.length
  for (let i = 0; i < len; i++) {
    const cur = nums[i]
    if (!temp[cur]) {
      temp[cur] = 1
    } else {
      temp[cur]++
    }
  }

  while (len >= 0) {
    if (!temp[len]) return len
    len--
  }
};
// @lc code=end

