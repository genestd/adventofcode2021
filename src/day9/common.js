module.exports = {
  checkForLowPoint: (arr, row, column) => {
    const rows = arr.length
    const columns = arr[0].length

    if (arr[row][column] === 0)
      return true
  
    let above = true, below = true, left = true, right = true
    if (row > 0) {
      above = arr[row][column] < arr[row - 1][column]
    }
    if (row < rows-1) {
      below = arr[row][column] < arr[row + 1][column]
    }
    if (column > 0) {
      left = arr[row][column] < arr[row][column - 1]
    }
    if (column < columns-1) {
      right = arr[row][column] < arr[row][column + 1]
    }
    return above && below && left && right
  },

  findLowPoint: (arr, row, column) => {
    if (arr[row][column] === 9) {
      return null
    }

    //console.log(`checking ${row}, ${column}`)
    let lowestPoint = module.exports.checkForLowPoint(arr, row, column);
    if (lowestPoint) {
      return `${row}-${column}`
    }
    
    const rows = arr.length - 1
    const columns = arr[0].length - 1
    // check up
    if (row > 0 && arr[row-1][column] < arr[row][column]) {
      return module.exports.findLowPoint(arr, row-1, column)
    // check down
    } else if (row < rows && arr[row+1][column] < arr[row][column]) {  
      return module.exports.findLowPoint(arr, row+1, column)
    // check left
    } else if (column > 0 && arr[row][column-1] < arr[row][column]) {
      return module.exports.findLowPoint(arr, row, column-1)
    // check right
    } else if (column < columns && arr[row][column+1] < arr[row][column]) {
      return module.exports.findLowPoint(arr, row, column + 1)
    }
  }
}