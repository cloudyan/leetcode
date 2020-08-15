/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  let times = 0;
  if (n <= 0) return false;
  while (n >= 1) {
    if (n == 1) return true
    if (n%2 != 0) return false
    n = n/2
    times++
  }
  return true
};
// @lc code=end

