/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// 三种情况，不仔细处理容易翻车
// 偶奇偶
// 奇偶奇
// 偶奇 奇偶
var countOdds = function(low, high) {
  const lowJi = low % 2 == 1
  const highJi = high % 2 == 1
  let diff = high - low + 1
  if (lowJi && highJi) {
    diff++
  } else if (!lowJi && !highJi) {
    diff--
  }
  return parseInt(diff/2, 10)
};
// @lc code=end

