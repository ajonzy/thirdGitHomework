export const weightedLottery = weights => {
    let choices = []
    for (let key of Object.keys(weights)) {
      for (let i = 0; i < weights[key]; i++) {
        choices.push(key)
      }
    }
    return(choices[Math.floor(Math.random() * choices.length)])
  }

  
export const weights = {
  red: 3,
  green: 5
}
