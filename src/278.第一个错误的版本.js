/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *   ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// 最简单方法，从第一个版本遍历向后找，直到找到第一个错误的版本(超时)
// 提高效率，二分法？
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1;
    let high = n;
    let firstBadVer = n;
    while (low <= high) {
      // let mid = Math.ceil((high+low)/2)
      let mid = (high + low) >>> 1;
      if (isBadVersion(mid)) {
        firstBadVer = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return firstBadVer;
  };
};

// var solution = function(isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function(n) {
//     for (let i = 1; i < n; i++) {
//         if (isBadVersion(i)) {
//             return i
//         }
//     }
//     return n
//   };
// };

// @lc code=end
