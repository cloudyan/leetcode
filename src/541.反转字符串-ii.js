/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// 每次遍历步进 2k
// 反转 [i, i+k-1]
var reverseStr = function(s, k) {
  let len = s.length
  if (len <= 1) return s
  let arr = s.split('')

  for (let i = 0; i < len; i += 2*k) {
    let left = i;
    let right = Math.min(i + k - 1, len - 1)

    while (left < right) {
      // const temp = arr[left]
      // arr[left] = arr[right]
      // arr[right] = temp
      // left++
      // right--

      [arr[left++], arr[right--]] = [arr[right], arr[left]]
    }
  }

  return arr.join('')
};
// @lc code=end

