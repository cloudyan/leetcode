/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = genMap(nums1)

  const res = []
  for (let i = 0; i < nums2.length; i++) {
    const temp = nums2[i]
    if (map[temp] > 0) {
      map[temp]--
      res.push(temp)
    }
  }

  return res;
};

function genMap(arr) {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i]
    if (typeof map[temp] === 'undefined') {
      map[temp] = 1;
    } else {
      map[temp]++
    }
  }
  return map;
}
// @lc code=end

