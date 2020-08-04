/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode-cn.com/problems/house-robber/solution/dong-tai-gui-hua-jie-ti-si-bu-zou-xiang-jie-cjavap/
// 动态规划的的四个解题步骤是：

// 1. 定义子问题
// 2. 写出子问题的递推关系
// 3. 确定 DP 数组的计算顺序
// 4. 空间优化（可选）

// 子问题：
// f(k) = 偷 [0..k) 房间中的最大金额

// f(0) = 0
// f(1) = nums[0]
// f(k) = max{ rob(k-1), nums[k-1] + rob(k-2) }

// f(k) = f(k-1) + f(k-2)
// var rob = function(nums) {
//   const len = nums.length
//   if (len == 0) return 0

//   const dp = []
//   dp[0] = 0
//   dp[1] = nums[0]

//   for (let k = 0; k < len; k++) {
//     dp[k] = Math.max(dp[k-1], dp[k-2] + nums[k-1])
//   }

//   return dp[len]
// };

// 空间优化 原本空间复杂度 O(N) 优化后 O(1)
var rob = function(nums) {
  let current = 0
  let prev = 0

  for (let i = 0; i < nums.length; i++) {
    // 循环开始时，current 表示 dp[k-1]，prev 表示 dp[k-2]
    // dp[k] = max{ dp[k-1], dp[k-2] + i }
    const temp = Math.max(current, prev + nums[i])
    prev = current;
    current = temp;
  }
  // 循环结束时，current 表示 dp[k]，prev 表示 dp[k-1]
  return current;
}

// @lc code=end

