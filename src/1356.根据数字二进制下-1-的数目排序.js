/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  return arr.sort((a, b) => {
    const num1 = bitOneNums(a)
    const num2 = bitOneNums(b)
    if (num1 == num2) {
      return a > b ? 1 : -1
    } else {
      return num1 > num2 ? 1 : -1
    }
  })
};

function bitOneNums(num) {
  const str = num.toString(2)
  let times = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) times++
  }
  return times
}
// @lc code=end

