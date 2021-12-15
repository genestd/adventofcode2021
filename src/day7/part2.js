const input = require('./input')

const main = () => {
  const cache = {}
  const getMax = arr => {
    return [...arr].sort((a,b) => a - b).pop()
  }
  const factorial = num => {
    if (cache[num]) {
      // console.log(`found ${num} in cache`)
      return cache[num]
    }

    if (num === 1 || num === 0)
      return num

    const val = num + factorial(num-1);
    cache[num] = val
    // console.log(`putting ${num} in cache`)
    return val
  }

  const calculateFuelCost = (position, data) => {
    let totalFuel = 0;
    data.forEach((x, index) => {
      const distance = Math.abs(x - position)
      // console.log(`checking factorial for ${distance}`)
      totalFuel += factorial(distance)
    })
    return totalFuel
  }

  const data = input.split(',').map(x => parseInt(x)).sort((a,b) => a-b)
  const max = getMax(data)
  const best = { position: -1, fuel: -1 }

  for (let pos = 1; pos <= max; pos++) {
    const cost = calculateFuelCost(pos, data)
    if (cost < best.fuel || best.fuel === -1) {
      best.position = pos
      best.fuel = cost
    }
  }

  console.log(`The most efficient position is ${best.position} (${best.fuel} fuel)`)
}

main()