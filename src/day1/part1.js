const input = require('./input.js')
const { arrayItemComparer } = require('./common.js')

const main = () => {
  const data = input.split('\n').map(val => parseInt(val))

  const depthIncreases = arrayItemComparer(data)
  console.log(`There were ${depthIncreases} depth increases`)
}

main()