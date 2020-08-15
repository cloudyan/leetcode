/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  const temp = arr.sort((a, b) => a - b > 0 ? 1 : -1)
  let diff = temp[1] - temp[0]
  for (let i = 2; i < temp.length; i++) {
    if (temp[i] - temp[i-1] !== diff) return false
  }
  return true;
};
// @lc code=end

