/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let i = 0
  let len = str.length - 1
  while (i < len) {
    if (str[i]!==str[len]) {
      return false
    }
    i++
    len--
  }
  return true
}
// @lc code=end

