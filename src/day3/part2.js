const input = require('./input')
const { getBitTracker } = require('./utils')
const main = () => {
  const data = input.split('\n')
  let oxygenGenerator = [...data]
  let co2Scrubber = [...data] 

  for (let i = 0; i < 12; i++) {
    let bitTracker = getBitTracker()
    oxygenGenerator.forEach(record => {
      const bits = record.split('')
      if (bits[i] === '0') {
        bitTracker.zeroes = bitTracker.zeroes + 1
      } else {
        bitTracker.ones = bitTracker.ones + 1
      }
    })

    const mostCommon = (bitTracker.ones >= bitTracker.zeroes) ? '1' : '0'
    if (oxygenGenerator.length > 1) {
      oxygenGenerator = oxygenGenerator.filter(rec => {
        const bits = rec.split('')
        return bits[i] === mostCommon
      })
    }

    let bitTracker2 = getBitTracker()
    co2Scrubber.forEach(record => {
      const bits = record.split('')
      if (bits[i] === '0') {
        bitTracker2.zeroes = bitTracker2.zeroes + 1
      } else {
        bitTracker2.ones = bitTracker2.ones + 1
      }
    })

    const leastCommon = (bitTracker2.zeroes <= bitTracker2.ones) ? '0' : '1'
    if (co2Scrubber.length > 1) {
      co2Scrubber = co2Scrubber.filter(rec => {
        const bits = rec.split('')
        return bits[i] === leastCommon
      })
    }
  }
  console.log(`Oxygen generator is ${parseInt(oxygenGenerator[0], 2)}`)
  console.log(`CO2 scrubber is ${parseInt(co2Scrubber[0], 2)}`)
  console.log(`Answer is ${parseInt(oxygenGenerator[0], 2) * parseInt(co2Scrubber[0], 2)}`)
}

main()