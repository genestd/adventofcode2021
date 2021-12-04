const input = require('./input')

const main = () => {
  const data = input.split('\n')
  const bitTracker = [
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
    { zeroes: 0, ones: 0},
  ]

  data.forEach(b => {
    const bits = b.split('')
    bits.forEach((bit, index) => {
      if (bit === '0') {
        bitTracker[index].zeroes = bitTracker[index].zeroes + 1
      } else {
        bitTracker[index].ones = bitTracker[index].ones + 1
      }
    })
  })

  let epsilonRate = '';
  let gammaRate = '';

  bitTracker.forEach(bit => {
    if (bit.zeroes > bit.ones) {
      epsilonRate = `${epsilonRate}0`
      gammaRate = `${gammaRate}1`
    } else {
      epsilonRate = `${epsilonRate}1`
      gammaRate = `${gammaRate}0`
    }
  })

  console.log(`Epsilon rate is ${parseInt(epsilonRate, 2)}`)
  console.log(`Gamma rate is ${parseInt(gammaRate, 2)}`)
  console.log(`Answer is ${parseInt(epsilonRate, 2) * parseInt(gammaRate, 2)}`)
}

main()