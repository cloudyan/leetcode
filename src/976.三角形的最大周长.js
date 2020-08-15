/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A = A.sort((a,b)=>{return a < b ? 1 : -1})

  for(let i = 0; i < (A.length-2); i++){
    if(A[i] < (A[i+1] + A[i+2])){
      return A[i] + A[i+1] + A[i+2]
    }
  }
  return 0
};
// @lc code=end

