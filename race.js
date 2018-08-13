let bibNumber = Math.floor(Math.random() * 1000)
let earlyReg = !!Math.round(Math.random())
// let earlyRegStat = !!earlyRegNum
let runnerAge = Math.round(Math.sqrt(Math.random()) * 40)
let raceTime
runnerAge < 18 ? raceTime = '12:30' : (earlyReg && runnerAge > 18 ? (bibNumber += 1000, raceTime = '9:30') : raceTime = '11:00')
console.log('Racer number ' + bibNumber +
    ', you will be racing at ' + raceTime)

console.log()

// console.log(earlyReg)
console.log('Register Early? ' + earlyReg)
console.log('Age: ' + runnerAge)
console.log('Bib Number: ' + bibNumber)