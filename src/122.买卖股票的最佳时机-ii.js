/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 贪心算法：一次遍历；逢低便买入，逢高便卖出
var maxProfit = function(prices) {
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      maxProfit += prices[i] - prices[i-1]
    }
  }
  return maxProfit
};

// 动态规划：

// 第i天仅有两种状态：持有或不持有.
// 假设数组dp[i][0]表示第i天不持有股票时的利益：dp[0][0] = 0
// dp[i][1]表示第i天持有股票时的利益:dp[0][1] = -prices[0]
// 相关的状态分析如下：

// 持有状态：
//   1.今天买入：则昨天是不持有的状态，当天利益为dp[i-1][0]-prices[i]；
//   2.前一天也持有：今天没有卖出，当天利益为dp[i-1][1]；
//   取其大着作为当天持有状态下的利益。
// 非持有状态：
//   1.今天卖出：则昨天是持有的状态，当天利益为dp[i-1][1]+prices[i]；
//   2.前一天也不持有：则今天也没有买入，当天利益就是前一天利益，即dp[i-1][0]；
//   取其大者作为当天非持有状态下的利益。
// 最后一天不持有股票时的利益即为最大利润.
// var maxProfit = function(prices) {
//   // 动态规划解法

//   // 0.初始判断
//   const len = prices.length
//   if(!len) return 0;

//   // 1.初始状态
//   const cash = [0] // 持有现金
//   const hold = [-prices[0]] // 持有股票
//   // const dp = []
//   // dp[0] = [0, -prices[0]];

//   // 2.状态转移
//   for(let i = 1; i < len; i++){
//     // 3.状态转移方程
//     cash[i] = Math.max(cash[i - 1], hold[i - 1] + prices[i]);
//     hold[i] = Math.max(hold[i - 1], cash[i - 1] - prices[i])

//     // dp[i] = [
//     //   max(dp[i-1][0], dp[i-1][1] + prices[i]),
//     //   max(dp[i-1][1], dp[i-1][0] - prices[i])
//     // ]
//   }

//   return cash[len - 1];
//   // return dp[len-1][0];
// }

// @lc code=end

