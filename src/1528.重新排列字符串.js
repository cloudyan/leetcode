/*
 * @lc app=leetcode.cn id=1528 lang=javascript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const len = s.length
  const arr = s.split('')
  const res = []
  for (let i = 0; i < len; i++) {
    res[indices[i]] = s[i]
    // 这里不能使用
    // res[i] = s[indices[i]]
  }
  return res.join('')
};
// @lc code=end

