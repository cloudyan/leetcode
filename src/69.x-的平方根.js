/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

// 先确认位数，后二分查找，不如直接二分查找来的直观
var mySqrt = function(x) {
  if (x === 0 || x=== 1) return x
  let low = 0
  let high = x
  let mid
  let qr
  while(low < high) {
    mid = Math.floor(low + (high - low)/2)
    qr = mid * mid
    if(qr === x) return mid
    if(qr < x && (mid + 1)*( mid + 1) > x) return mid // 这里要判断mid下一位的平方是否会比给定的阿平方数大
    if(qr > x) {
      high = mid -1
    }else {
      low = mid + 1
    }

  }
  return low // 最后返回low必然没错，因为是舍弃小数点往小取整数
};
// @lc code=end

