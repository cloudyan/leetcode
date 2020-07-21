/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let result = 0
  for (let i = 0; i < s.length; i++) {
    const num = s[i].charCodeAt() - 64 // 'A' + 1
    result = result * 26 + num
  }
  return result
};
// @lc code=end

