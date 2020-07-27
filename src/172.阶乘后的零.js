/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 质因子2足够多的情况下，一个 5 产生一个零
// 25=5*5 能产生两个零， 125 产生 30 个零
var trailingZeroes = function(n) {
  let count = 0
  while (n >= 5) {
    n = parseInt(n/5)
    count += n
  }

  return count
};
// @lc code=end

