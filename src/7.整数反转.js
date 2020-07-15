/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  //  2147483647  0x7FFFFFFF
  // -2147483648 -0x80000000
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  const result = Math.abs(x).toString().split('').reverse().join('');

  // 最大值最小值不能赋值
  if (result > max) return 0;
  if (result < min) return 0;

  return x < 0 ? -result : result;
};

// @lc code=end

