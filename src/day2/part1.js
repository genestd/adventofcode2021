const input = require('./input.js')
const { move } = require('./common')

const main = () => {
  const commands = input.split('\n').map(c => {
    const [direction, distance] = c.split(' ')
    return { direction, distance: parseInt(distance) }
  })

  let coordinates = { x: 0, y: 0 }
  
  commands.forEach(command => {
    coordinates = move(command.direction, command.distance, coordinates)
  })

  console.log(`Final horizontal position: ${coordinates.x}`)
  console.log(`Final depth: ${coordinates.y}`)
  console.log(`Answer: ${coordinates.x * coordinates.y}`)
}

main()