/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// S = min(h(i), h(j))*(j-i)
var maxArea = function(height) {
  let i = 0;
  let j = height.length

  let s = 0
  while (i < j) {
    const temp = Math.min(height[i], height[j]) * (j - i)
    if (temp > s) s = temp
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return s
};
// @lc code=end

