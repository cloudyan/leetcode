// const json = require('../data/problemset.json')
// console.log(json)

const fs = require('fs')

fs.readFile('./data/test.json', 'utf8', (err, data) => {
  if (err) return console.error(err)

  console.log(typeof data)
  // console.log(data)
  data = data.replace(/(\u[a-z0-9]{4})/g, (match, $1) => {
    const temp = $1
    console.log(match, JSON.stringify(`\u4e24`))
    console.log(match, JSON.stringify(match), unescape(JSON.stringify($1).substr(2, 6)))
    return $1
  })
  fs.writeFile('./data/problem.js', data, (err, data) => {
    if (err) return console.error(err)
    console.log(data);
  })
})

