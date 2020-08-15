/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  // 记录个数
  const map = {}

  const len1 = ransomNote.length
  const len2 = magazine.length
  if (len1 > len2) return false;

  for (let i = 0; i < len2; i++) {
    const temp = magazine[i]
    if (!map[temp]) {
      map[temp] = 1
    } else {
      map[temp]++
    }
  }

  for (let i = 0; i < len1; i++) {
    const temp = ransomNote[i]
    if (!map[temp]) return false
    map[temp]--
    if (map[temp] < 0) return false
  }

  return true
};
// @lc code=end

