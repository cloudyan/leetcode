/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 类似 49 字母异位词分组
var checkInclusion = function(s1, s2) {
  const len1 = s1.length
  const len2 = s2.length

  let index = 'a'.charCodeAt();
  // s1
  const str1Map = []
  str1Map.length = 26
  str1Map.fill(0);
  for (let i = 0; i < len1; i++) {
    const cur = s1[i].charCodeAt() - index
    str1Map[cur]++
  }
  const s1map = str1Map.join('')

  // s2
  const map2 = {}
  for (let i = 0; i <= len2 - len1; i++) {
    let str2Map = []
    str2Map.length = 26
    str2Map.fill(0);
    for (let j = 0; j < len1; j++) {
      const cur = s2[i+j].charCodeAt() - index
      str2Map[cur]++
    }
    let s2map = str2Map.join('')
    if (s2map == s1map) return true
    // map2[str2Map.join('')] = true
  }

  return false
};
// @lc code=end

