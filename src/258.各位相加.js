/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return calcNum(num)
};

function calcNum(num, cache = {}) {
  const str = num.toString()
  if (str.length == 1) return num;
  const res = str.split('').reduce((a, b) => Number(a) + Number(b))
  // console.log(str.split(''))
  if (cache[res]) return false
  cache[res] = true
  return calcNum(res, cache)
}

// @lc code=end

