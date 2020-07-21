/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 不同于前一个，这里输入零输出 [1]
var getRow = function(rowIndex) {
  let curLayer = []
  let last = []
  if (rowIndex+1 == 0) return curLayer

  for (let i = 1; i <= rowIndex+1; i++) {
    last = curLayer
    curLayer = []
    curLayer[0] = 1
    curLayer[i-1] = 1

    if (i > 2) {
      // console.log(temp)
      for (let k = 1; k < i-1; k++) {
        curLayer[k] = last[k-1] + last[k]
      }
    }
    // res.push(curLayer)
    // console.log(res)
  }
  return curLayer
};
// @lc code=end

