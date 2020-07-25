/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

// 1. 使用进制转换
// 2. 结合 map 或 fromCharCode方法
var convertToTitle = function(n) {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let res = ''
  let t = n

  while (t > 0) {
    t--
    // 利用进制转换的思想
    let a = t % 26;
    t = Math.floor(t/26);
    res = `${str[a]}${res}`
  }
  return res
};
// @lc code=end

