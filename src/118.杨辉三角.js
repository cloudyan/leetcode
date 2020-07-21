/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = []
  if (numRows == 0) return res

  for (let i = 1; i <= numRows; i++) {
    const curLayer = []
    curLayer[0] = 1
    curLayer[i-1] = 1

    if (i > 2) {
      const temp = res[i-2]
      // console.log(temp)
      for (let k = 1; k < i-1; k++) {
        curLayer[k] = temp[k-1] + temp[k]
      }
    }
    res.push(curLayer)
    // console.log(res)
  }
  return res
};
// @lc code=end

