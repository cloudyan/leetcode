/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 可以暴力破解，但要计算所有差值
// 优化方案是，记录每个卖出点时，最大差值(滑动窗口法)
var maxProfit = function(prices) {
  let minPrice = Number.MAX_VALUE
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i]
    }

    let temp = prices[i] - minPrice
    maxProfit = temp > maxProfit ? temp : maxProfit
  }

  return maxProfit
};

// var maxProfit = function(prices) {
//   let start = 0 // 买入点
//   let end = 0   // 卖出点
//   let max = 0

//   for (; end < prices.length; end++) {
//     if (prices[start] > prices[end]) {
//       start = end
//     }
//     let temp = prices[end] - prices[start]
//     max = temp > max ? temp : max
//   }

//   return max
// };
// @lc code=end

