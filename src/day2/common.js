module.exports = {
  move: (direction, distance, coordinates) => {
    const newCoordinates = { ...coordinates }
    switch (direction) {
      case 'forward':
        newCoordinates.x = newCoordinates.x + distance;
        break;
      case 'up':
        newCoordinates.y = newCoordinates.y - distance;
        break;
      case 'down':
        newCoordinates.y = newCoordinates.y + distance;
        break;
      default:
        console.log('Unknown direction')
    }
    return newCoordinates
  },
  move2: (direction, distance, coordinates) => {
    const newCoordinates = { ...coordinates }
    switch (direction) {
      case 'forward':
        newCoordinates.x = newCoordinates.x + distance;
        newCoordinates.y = newCoordinates.y + (distance * newCoordinates.aim)
        break;
      case 'up':
        newCoordinates.aim = newCoordinates.aim - distance;
        break;
      case 'down':
        newCoordinates.aim = newCoordinates.aim + distance;
        break;
      default:
        console.log('Unknown direction')
    }
    return newCoordinates
  }
}