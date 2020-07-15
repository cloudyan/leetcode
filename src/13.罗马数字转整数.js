
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // 组合出所有排列
  const map = {
    I: 1,
    V: 5,
    IV: 4,
    IX: 9,

    X: 10,
    L: 50,
    XL: 40,
    XC: 90,

    C: 100,
    D: 500,
    CD: 400,
    CM: 900,
    M: 1000,
  }

  const arr = s.split('')
  let index = 0
  let result = 0
  while(index < arr.length) {
    let prev = arr[index]
    let next = arr[index+1]
    if (next && map[`${prev}${next}`]) {
      result += map[`${prev}${next}`]
      index += 2
    } else {
      result += map[prev]
      index += 1
    }
  }
  return result
};
// @lc code=end

