/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  // 对 arr1 做 map 映射存储，按 arr2 取存，剩余数据排序拼接末尾处

  const map = {}
  let len = arr1.length;
  for (let i = 0; i < len; i++) {
    const cur = arr1[i]
    if (!map[cur]) {
      map[cur] = 1
    } else {
      map[cur]++
    }
  }

  let res = mapToArr(map, arr2)

  const arr3 = Object.keys(map).sort((a, b) => Number(a) > Number(b) ? 1 : -1)
  res = res.concat(mapToArr(map, arr3))
  return res;
};

function mapToArr(map, arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i]
    const temp = fillArr(cur, map[cur])
    delete map[cur]
    res = res.concat(temp)
  }
  return res;
}

function fillArr(cur, num) {
  const temp = [];
  temp.length = num
  temp.fill(Number(cur))
  return temp
}

// relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])
// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
// @lc code=end

