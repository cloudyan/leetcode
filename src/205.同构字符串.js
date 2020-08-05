/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 全替换为数字表示字符，统一标识
var isIsomorphic = function(s, t) {
  return calcStrMap(s) == calcStrMap(t)
};

function calcStrMap(str) {
  const map = {}
  const arr = []
  let temp = 1
  for (let i = 0; i < str.length; i++) {
    const cur = str[i]
    if (typeof map[cur] == 'undefined') {
      map[cur] = temp++
    }
    arr.push(map[cur])
  }
  return arr.join('')
}
// @lc code=end

