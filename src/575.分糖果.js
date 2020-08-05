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
// var distributeCandies = function(candies) {
//   const cache = {}

//   const len = candies.length
//   const max = len/2
//   let num = 0;
//   for (let i = 0; i < len; i++) {
//     const temp = candies[i]
//     if (!cache[temp]) {
//       num++
//       cache[temp] = true
//       if (num == max) return num
//     } else {
//       continue
//     }
//   }

//   return num;
// };

var distributeCandies = function(candies) {
  const types = new Set(candies)
  const max = candies.length/2
  const len = types.size
  // console.log(len, max)
  return len < max ? len : max;
};

// @lc code=end

