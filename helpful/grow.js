
// 到店咨询数量 签单率
var grow = function(month, prev = 18) {
  let res = prev
  const months = [prev];
  for (let i = 0; i < month; i++) {
    prev = Math.ceil(prev * 1.5)
    months.push(prev)
    res += prev
  }
  console.log(JSON.stringify(months))
  console.log('result:', res)
  return res
}

grow(6)
