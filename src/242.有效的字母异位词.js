/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 排序后看是否相同 时间复杂度高
// 唯一编码记录次数，记录出现的次数，是否一致
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const temp = {}
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (!temp[cur]) {
      temp[cur] = 1;
    } else {
      temp[cur]++
    }
  }

  for (let i = 0; i < t.length; i++) {
    const cur = t[i]
    if (!temp[cur]) return false
    temp[cur]--
  }
  return true;
};
// @lc code=end

