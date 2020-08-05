/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const map = genMap(nums)

  const res = []
  for (let key in map) {
    if (map[key] == 1) {
      res.push(key)
    }
  }
  return res;
};

function genMap(arr, cache = {}) {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i]
    if (typeof cache[temp] === 'undefined') {
      cache[temp] = 1;
    } else {
      cache[temp]++
    }
  }

  return cache;
}


// @lc code=end

