/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯法
// dfs 深度优先
var permute = function(nums) {
  const result = []
  backtrack(result, [], nums)
  return result
};
function backtrack(list = [], tempList = [], nums) {
  if (tempList.length === nums.length) return list.push([...tempList])

  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) continue;
    tempList.push(nums[i])
    backtrack(list, tempList, nums)
    tempList.pop()
  }
}
// @lc code=end

