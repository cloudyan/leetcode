/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
// salary[i] 唯一，所以不用考虑多个的情况
var average = function(salary) {
  let min = Number.MAX_VALUE;
  let max = 0;

  let sum = 0;
  const len = salary.length
  for (let i = 0; i < len; i++) {
    const cur = salary[i]
    if (min > cur) min = cur;
    if (max < cur) max = cur;
    sum += cur;
  }

  sum = sum - min - max
  return sum/(len-2)
};
// @lc code=end

