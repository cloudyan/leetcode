/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let len = nums.length
  let index = findIndex(nums)
  if (index == -1) return sortArr(nums, 0);
  let swapIndex = findMinBigIndex(nums, index)

  swapNums(nums, index, swapIndex)

  if (len - index > 2) {
    sortArr(nums, index+1)
  }

  return nums
};

function findIndex(nums) {
  for (let i = nums.length - 2; i>=0; i--) {
    if (nums[i] < nums[i+1]) return i
  }
  return -1
}
// 右键 Run Code 可以运行调试
// https://github.com/cloudyan/config/blob/master/conf/babel.config.js
// console.log(findIndex([1,2,3]))

function findMinBigIndex(nums, index) {
  let minBigIndex = index + 1
  for (let j = minBigIndex; j < nums.length; j++) {
    if (nums[index] < nums[j]) {
      if (nums[j] < nums[minBigIndex]) minBigIndex = j
    }
  }
  return minBigIndex
}

function swapNums(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp;
}

function sortArr(nums, index) {
  const arr = nums.slice(index).sort((a, b)=> a>=b ? 1 : -1)
  for (let k = 0; k < arr.length; k++) {
    nums[index+k] = arr[k]
  }
}

// @lc code=end

