/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function callSelf(n) {
  if (n > 30) return ''
  if (n == 2) return '11'
  if (n == 1) return '1'

  let str = callSelf(n-1)
  let result = ''
  let cur = str[0]
  let num = 1
  for (let i = 1; i < str.length; i++) {
    if (cur == str[i]) {
      num++
    } else {
      result += `${num}${cur}`
      cur = str[i]
      num = 1
    }
  }
  result += `${num}${cur}`

  return result
};

// @lc code=end

