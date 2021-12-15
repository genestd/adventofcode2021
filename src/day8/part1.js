const input = require('./input')

const main = () => {
  const data = input.split('\n').map(record => record.split(' | ')[1].split(' ').filter(val => val !== '' && val !== ' ')).flat()
  
  const result = data.filter(val => val.length === 2 || val.length === 3 || val.length === 4 || val.length === 7)
  console.log(result.length)
}

main()