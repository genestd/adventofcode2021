const input = require('./input.js')
const { arrayItemComparer } = require('./common.js')

const main = () => {
  const data = input.split('\n').map(val => parseInt(val))

  const windows = []
  data.forEach((val, idx, arr) => {
    if (idx >= 2) {
      windows.push(val + arr[idx-1] + arr[idx-2])
    }
  })

  let depthIncreases = arrayItemComparer(windows)
  console.log(`There were ${depthIncreases} depth increases`)
}

main()