/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   const map = {}
//   for (let i = 0; i < nums.length; i++) {
//     const cur = nums[i]
//     if (!map[cur]) {
//       map[cur] = 1
//     } else {
//       delete map[cur]
//     }
//   }
//   return Object.keys(map)[0]
// };

// 不使用额外空间？可使用异或运算 ⊕。异或运算有以下三个性质。

// - 任何数和 00 做异或运算，结果仍然是原来的数，即 a⊕0=a。
// - 任何数和其自身做异或运算，结果是 0，即 a⊕a=0。
// - 异或运算满足交换律和结合律，即 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。

var singleNumber = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
}

// @lc code=end

