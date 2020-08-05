/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  const cache = {}

  const len = candies.length
  const max = len/2
  let num = 0;
  for (let i = 0; i < len; i++) {
    const temp = candies[i]
    if (!cache[temp]) {
      num++
      cache[temp] = true
      if (num == max) return num
    } else {
      continue
    }
  }

  return num;
};
// @lc code=end

