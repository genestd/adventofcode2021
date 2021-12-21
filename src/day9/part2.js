const input = require('./input')
const { findLowPoint } = require('./common')

const main = () => {
  const data = input.split('\n').map(row => row.split('').map(x => parseInt(x)))
  const rows = data.length
  const columns = data[0].length
  const lowPoints = {}

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      // console.log(`checking ${row}, ${column}`)
      try {
        let point = findLowPoint(data, row, column)
        if (point && !lowPoints[point]) {
          lowPoints[point] = 1
        } else {
          if (point === null)
            point = 'x'
          lowPoints[point] = lowPoints[point] + 1
        }
      } catch (error) {
        console.log(`error at ${row}, ${column}`, error)
        return
      }

    }
  }

  const data2 = Object.entries(lowPoints).filter(([key, value]) => key !== 'x')
  data2.sort((a, b) => b[1] - a[1])
  console.log(data2[0], data2[1], data2[2])

  //console.log(`There are ${lowPoints.length} low points. Their risk score is ${answer}`)
}

main()