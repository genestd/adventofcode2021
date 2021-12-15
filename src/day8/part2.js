const input = require('./input')

const main = () => {
  const data = input.split('\n').map(record => record.split(' | ').reduce((total, next, index) => {
    if (index === 0) 
      total.input = next
    if (index === 1)
      total.output = next
    
    return total
  },{} ))

  let total = 0
  
  //const result = data.filter(val => val.length === 2 || val.length === 3 || val.length === 4 || val.length === 7)
  data.forEach((item, index) => {
    const numbers = getNumbersFromItem(item)
    
    const output = item.output.split(' ').map(item => item.split(''))
    let value = ''
    output.forEach(digit => {
      digit = getDigitFromNumbers(digit, numbers)
      value = `${value}${digit}`
    })

    if (index === 1)
      console.log(item, numbers, value)

    total = total + parseInt(value)
  })
  console.log(total)
}

const isNumber3 = (value = [], one = [], four = []) => {
  let fourCount = 0
  four.forEach(val => {
    if (value.includes(val))
      fourCount++
  })
  return one.every(val => value.includes(val)) && fourCount === 3
}

const isNumber5 = (value = [], one = [], four = []) => {
  let fourCount = 0
  four.forEach(val => {
    if (value.includes(val))
      fourCount++
  })
  return !one.every(val => value.includes(val)) && fourCount === 3
}

const isNumber6 = (value = [], one = []) => {
  return !one.every(val => value.includes(val)) && value.length === 6
}

const isNumber9 = (value = [], four = []) => {
  return four.every(val => value.includes(val)) && value.length === 6
}

const getNumbersFromItem = (item) => {
  const values ={
    0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []
  }

  const inputs = item.input.split(' ').sort((a,b) => a.length - b.length)
  values[1] = inputs[0].split('')
  values[7] = inputs[1].split('')
  values[4] = inputs[2].split('')

  if (isNumber3(inputs[3].split(''), values[1], values[4])) {
    values[3] = inputs[3].split('')
  } else if (isNumber5(inputs[3].split(''), values[1], values[4])) {
    values[5] = inputs[3].split('')
  } else {
    values[2] = inputs[3].split('')
  }

  if (isNumber3(inputs[4].split(''), values[1], values[4])) {
    values[3] = inputs[4].split('')
  } else if (isNumber5(inputs[4].split(''), values[1], values[4])) {
    values[5] = inputs[4].split('')
  } else {
    values[2] = inputs[4].split('')
  }
  
  if (isNumber3(inputs[5].split(''), values[1], values[4])) {
    values[3] = inputs[5].split('')
  } else if (isNumber5(inputs[5].split(''), values[1], values[4])) {
    values[5] = inputs[5].split('')
  } else {
    values[2] = inputs[5].split('')
  }

  if (isNumber6(inputs[6].split(''), values[1])) {
    values[6] = inputs[6].split('')
  } else if (isNumber9(inputs[6].split(''), values[4])) {
    values[9] = inputs[6].split('')
  } else {
    values[0] = inputs[6].split('')
  }

  if (isNumber6(inputs[7].split(''), values[1])) {
    values[6] = inputs[7].split('')
  } else if (isNumber9(inputs[7].split(''), values[4])) {
    values[9] = inputs[7].split('')
  } else {
    values[0] = inputs[7].split('')
  }

  if (isNumber6(inputs[8].split(''), values[1])) {
    values[6] = inputs[8].split('')
  } else if (isNumber9(inputs[8].split(''), values[4])) {
    values[9] = inputs[8].split('')
  } else {
    values[0] = inputs[8].split('')
  }

  values[8] = inputs[9].split('')

  return values
}

const getDigitFromNumbers = (digit, numbers) => {
  let value = ''
  Object.keys(numbers).forEach(key => {
    if (numbers[key].length === digit.length && numbers[key].every(num => digit.includes(num)))
      value = key
  })
  return value
}
//  000
// 1   2
// 1   2
//  333
// 4   5
// 4   5
//  666

// 2,5 = #1
// 0,2,5 = #7
// 1,2,3,5 = #4
// 0,1,2,3,4,5,6 = #8

// 0,2,3,5,6 = #3 - 5 digits, contains both #1 and 3 of #4
// 0,1,3,5,6 = #5 - 5 digits, contains 3 of #4, not both of #1
// 0,2,3,4,6 = #2 - 5 digits, process of elim??
// 0,1,3,4,5,6 = #6 - 6 digits, not both of #1
// 0,1,2,3,5,6 = #9 - 6 digits, has all of #4
// 0,1,2,4,5,6 = #0 - 6 digits process of elimination

main()

