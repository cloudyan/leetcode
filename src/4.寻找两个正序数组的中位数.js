/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 先合并排序，根据奇偶长度，取中间值
// 优化不合并，只要找到中间值索引位置即可
// 但这两种方案O(m+n)都不满足时间复杂度 O(log(m+n))
// var findMedianSortedArrays = function(nums1, nums2) {
//   const len = nums1.length + nums2.length
//   const middle = len/2
//   const mid = parseInt(middle)

//   const result = []
//   let i = 0;
//   let j = 0;
//   while (i < nums1.length) {
//     while(j < nums2.length) {
//       if (nums1[i] < nums2[j]) {
//         result.push(nums1[i++])
//       } else {
//         result.push(nums2[j++])
//       }
//     }
//   }
//   if (middle == mid) {
//     return result[mid]
//   }
//   return (result[mid] + result[mid+1])/2
// };

// 时间复杂度有 log，通常需要用到二分法
// 思路是
// 这道题可以转化成寻找两个有序数组中的第 k 小的数
var findMedianSortedArrays = function(nums1, nums2) {
  const totalLen = nums1.length + nums2.length
  const middle = totalLen/2
  const mid = parseInt(middle)

  if (totalLen % 2 == 0) {

  }

}

function getKthElement(nums1, nums2, k) {
  const len1 = nums1.length
  const len2 = nums2.length
  let index1 = 0
  let index2 = 0
  let kthElement = 0;

  while (true) {
    // 边界情况
    if (index1 = len1) {
      return nums[index1 + k - 1]
    }
    if (index2 = len2) {
      return nums[index2 + k - 1]
    }
    if (k == 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }

    // 正常情况
    const half = parseInt(k/2)

  }
}

// 但本题存在时间复杂度更低的一种方法，划分数组
// @lc code=end

