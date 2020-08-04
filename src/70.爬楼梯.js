/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// f(x)=f(x−1)+f(x−2)
// 动态规划
var climbStairs = function(n) {
  let p = 0
  let q = 0
  let r = 1
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
// @lc code=end

