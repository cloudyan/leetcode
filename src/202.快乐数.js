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

// map 放在外层，有可能运行多个测试用例时，未初始化导致出错
var isHappy = function(n) {
  return calcNum(n)
};

function calcNum(n, cache = {}) {
  const res = n.toString().split('').reduce((total, i) => total + i*i, 0)
  if (cache[res]) return false
  if (res == 1) return true
  cache[res] = true
  return calcNum(res, cache)
}
// @lc code=end

