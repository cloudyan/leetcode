/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {}
  for (let i = 0; i < strs.length; i++) {
    const current = strs[i]
    const temp = current.split('').sort()
    if (!map[temp]) {
      map[temp] = [current]
    } else {
      map[temp].push(current)
    }
  }
  return Object.values(map)
};
// @lc code=end

