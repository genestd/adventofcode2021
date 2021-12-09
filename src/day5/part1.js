const input = require('./input')

const main = () => {
  const lines = input.split('\n').map(line => {
    const [start, end] = line.split('->')
    const [startX, startY] = start.split(',').map(val => parseInt(val))
    const [endX, endY] = end.split(',').map(val => parseInt(val))
    return {
      startX,
      startY,
      endX,
      endY
    }
  })
  
  const verticalLines = lines.filter(line => line.startX === line.endX)
  const horizontalLines = lines.filter(line => line.startY === line.endY)
  console.log(`There are ${horizontalLines.length} horizontal lines and ${verticalLines.length} vertical lines.`)

  const ventMap = {}

  horizontalLines.forEach(line => {
    const startingPoint = line.startX < line.endX ? line.startX : line.endX
    const endpoint = line.startX < line.endX ? line.endX : line.startX
    const y = line.startY
    for (let i = startingPoint; i <= endpoint; i++) {
      const key = `${i}x${y}y`
      ventMap[key] = (ventMap[key] || 0) + 1
    }
  })

  verticalLines.forEach(line => {
    const startingPoint = line.startY < line.endY ? line.startY : line.endY
    const endpoint = line.startY < line.endY ? line.endY : line.startY
    const x = line.startX
    for (let i = startingPoint; i <= endpoint; i++) {
      const key = `${x}x${i}y`
      ventMap[key] = (ventMap[key] || 0) + 1
    }
  })

  const overlaps = Object.keys(ventMap).filter(key => ventMap[key] > 1)
  console.log(`There are ${overlaps.length} overlapping lines`)
}

main()