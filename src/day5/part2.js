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
  const diagonalLines = lines.filter(line => {
    const { startX, endX, startY, endY} = line
    const rise = startY < endY ? (endY - startY) : (startY - endY) 
    const run = startX < endX ? (endX - startX) : (startX - endX)
    return rise === run
  })

  console.log(`There are ${diagonalLines.length} diagonal lines, ${horizontalLines.length} horizontal lines and ${verticalLines.length} vertical lines.`)

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

  diagonalLines.forEach((line, index) => {
    let { startX, startY, endX, endY } = line
    let tempX, tempY
    // reposition lines
    if (startX > endX) {
      tempX = startX
      tempY = startY
      startX = endX
      startY = endY
      endX = tempX
      endY = tempY
    }
    const startingPoint = startX
    const endpoint = endX
    const rise = startY - endY
    const slope = rise > 0 ? -1 : 1;

    for (let i = 0; i <= endpoint - startingPoint; i++) {
      const key = `${startingPoint + i}x${startY + (i * slope)}y`
      ventMap[key] = (ventMap[key] || 0) + 1

    // if (index === 0)
    //      console.log(key)
    // }
    // if (index === 0) {
    //   console.log({line, startingPoint, slope})
    // }
    }
  })

  const overlaps = Object.keys(ventMap).filter(key => ventMap[key] > 1)
  console.log(`There are ${overlaps.length} overlapping lines`)
}

main()