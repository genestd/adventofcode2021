const input = require('./input')
const { checkForLowPoint } = require('./common')

const main = () => {
  const data = input.split('\n').map(row => row.split(''))
  const rows = data.length
  const columns = data[0].length
  const lowPoints = []

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      // console.log(`checking ${row}, ${column}`)
      if (checkForLowPoint(data, row, column)) {
        if (lowPoints.length === 0)
          console.log(row, column)
        lowPoints.push(parseInt(data[row][column]))
      }
    }
  }

  const answer = lowPoints.reduce((total, next) => total = (total + next + 1), 0)

  console.log(`There are ${lowPoints.length} low points. Their risk score is ${answer}`)
}

main()