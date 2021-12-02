module.exports = {
  arrayItemComparer: (data) => {
    let numberOfIncreases = 0
    for (let i=0; i<data.length; i++) {
      if (i > 0 && data[i] > data[i-1]) {
        numberOfIncreases++
      }
    }
    return numberOfIncreases
  }
}