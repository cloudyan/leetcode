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
    const temp = current.split('').sort().join('')
    if (!map[temp]) {
      map[temp] = [current]
    } else {
      map[temp].push(current)
    }
  }
  return Object.values(map)
};

// 或使用 # 分割 26 个字母，让字符串分别对应上述的位置记录次数
// 或者解释为 26 位长度的字符对应记录字符串每个字母出现的次数

// @lc code=end

