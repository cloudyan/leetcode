/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 243 4→16→37→58→89→145→42→20→4
// const map = {
//   4: 1,
//   16: 1,
//   37: 1,
//   58: 1,
//   89: 1,
//   145: 1,
//   42: 1,
//   20: 1,
// }
// var isHappy = function(n) {
//   const res = n.toString().split('').reduce((total, i) => total + i*i, 0)
//   if (map[res]) return false
//   if (res == 1) return true
//   // map[res] = true
//   return isHappy(res)
// };

var isHappy = function(n) {
  const map = {}

  function calcNum(n) {
    const res = n.toString().split('').reduce((total, i) => total + i*i, 0)
    if (map[res]) return false
    if (res == 1) return true
    map[res] = true
    return calcNum(res)
  }

  return calcNum(n)
};
// @lc code=end

