/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const temp1 = []
  const temp2 = []
  for (let i = 0; i < A.length; i++) {
    const cur = A[i]
    if (cur % 2 == 0) {
      temp1.push(cur)
    } else {
      temp2.push(cur)
    }
  }

  const res = []
  while (temp1.length) {
    res.push(temp1.pop())
    res.push(temp2.pop())
  }

  return res
};
// @lc code=end

