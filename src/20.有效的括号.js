/*!
 * @Author: cloudyan <cloudcode@qq.com>
 * @Date: 2020-07-15 15:06:14
 * 功能说明:
 */

/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') return true;
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const result = []
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    if ('[](){}'.indexOf(current) === -1) return false;
    if (map[result[0]] !== current) {
      result.unshift(current)
    } else {
      result.shift()
    }
    // console.log(result)
  }
  return !result.length
};
// @lc code=end

