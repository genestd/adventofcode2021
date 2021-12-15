const input = require('./input')

const main = () => {
  const data = input.split(',').map(x => parseInt(x))
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

const getMax = arr => {
  return [...arr].sort((a,b) => a - b).pop()
}

const calculateFuelCost = (position, data) => {
  let totalFuel = 0;
  data.forEach((x, index) => {
    totalFuel += Math.abs(x - position)
  })
  return totalFuel
}

main()