/*
 * @lc app=leetcode.cn id=1529 lang=javascript
 *
 * [1529] 灯泡开关 IV
 */

// @lc code=start
/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
  const arr = target.split('')
  let num = 0;
  let temp = 0
  for (let i = 0; i < target.length; i++) {
    if (target[i] == temp) continue;
    num++
    temp = target[i]
  }
  return num
};
// @lc code=end

