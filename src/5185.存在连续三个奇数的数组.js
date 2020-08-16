/*
 * @lc app=leetcode.cn id=5185 lang=javascript
 *
 * [5185] 存在连续三个奇数的数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 1) {
      num++
    } else {
      num = 0
    }
    if (num == 3) return true
  }
  return false;
};
// @lc code=end

