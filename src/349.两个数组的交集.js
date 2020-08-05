/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
  nums2 = new Set(nums2)
  return [...new Set([...nums1].filter(x => nums2.has(x)))]
};

// 两个数组的交集 并集 差集

// 并集
// let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
// let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
// let difference = new Set([...a].filter(x => !b.has(x)));


// @lc code=end

