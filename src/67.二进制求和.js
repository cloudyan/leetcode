/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  return (BigInt('0b'+a, 2) + BigInt('0b'+b, 2)).toString(2)
};

// 那 0x 呢？
// @lc code=end

