/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  if (strs.length == 1) return strs[0]

  let result = ''
  let temp1 = strs[0]

  for (let i = 1; i < strs.length; i++) {
    const temp2 = strs[i]
    for (let k = 0; k < temp1.length; k++) {
      if (temp1[k] == temp2[k]) {
        result = temp1.slice(0, k+1);
      } else {
        result = temp1.slice(0, k)
        temp1 = result
      }
      // console.log(result, temp1, temp2, k)
    }
  }
  return result
};

// @lc code=end

