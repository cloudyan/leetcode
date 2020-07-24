/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function(s) {
  const result = []
  const len = s.length
  let max = 0
  let i = 0;
  for (; i < len; i++) {
    const cur = s[i]
    const index = result.findIndex(v => v == cur)
    if (index == -1) {
      result.push(cur)
      max = Math.max(max, result.length)
    } else {
      result.splice(0, index + 1)
      result.push(cur)
    }
  }
  return max
};
// @lc code=end

