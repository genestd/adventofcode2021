const input = require('./input')

const main = () => {
  let [bingoNumbers, ...boards] = input.split('\n\n')
  boards = boards.map(board => {
    let rows = board.split('\n')
    rows = rows.map(row => row.split(' ').filter(num => num !== '').map(val => parseInt(val)))
    
    let winningCombos = [
      rows[0],
      rows[1],
      rows[2],
      rows[3],
      rows[4],
      [rows[0][0], rows[1][0], rows[2][0], rows[3][0], rows[4][0]],
      [rows[0][1], rows[1][1], rows[2][1], rows[3][1], rows[4][1]],
      [rows[0][2], rows[1][2], rows[2][2], rows[3][2], rows[4][2]],
      [rows[0][3], rows[1][3], rows[2][3], rows[3][3], rows[4][3]],
      [rows[0][4], rows[1][4], rows[2][4], rows[3][4], rows[4][4]]
    ]
    return {
      board: rows.flat(),
      winningCombos
    }
  
  })

  bingoNumbers = bingoNumbers.split(',').map(num => parseInt(num))

  let calledNumbers = []
  let winner = false
  let winningBoard = -1
  bingoNumbers.forEach(num => {
    if (!winner) {
      calledNumbers.push(num)
      boards.forEach((board, index) => {
        board.winningCombos.forEach((combo, idx) => {
          if (!winner && combo.every(val => calledNumbers.includes(val))) {
            winner = true
            winningBoard = index
            console.log(`Board ${index}, combo ${idx} is a bingo with called numbers ${calledNumbers.join(' ')}`)
            console.log(`Winning combo: ${boards[index].winningCombos[idx].join(' ')}`)
            console.log(`Winning board, all numbers: ${boards[index].board}`)
          }
        })
      })
    }
  })

  const score = boards[winningBoard].board
    .filter(num => !calledNumbers.includes(num))
    .reduce((total, val) => total + val, 0)
  console.log(score * calledNumbers.pop())
}

main()