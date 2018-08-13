let userName = 'Dave'

if (userName === '') {
  console.log('Hello, what would you like to know?')
} else {
  console.log('Hello, ' + userName + ', what would you like to know?')
}

let userQuestion = 'Will I ever stop getting high?'

console.log(userQuestion)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall

switch (randomNumber) {
  case 0:
    eightBall = ('It is Certain')
    break
  case 2:
    eightBall = ('It is decidedly so')
    break
  case 3:
    eightBall = ('Reply hazy try again')
    break
  case 4:
    eightBall = ('Cannot predict now')
    break
  case 5:
    eightBall = ('Do not count on it')
    break
  case 6:
    eightBall = ('My sources say no')
    break
  case 7:
    eightBall = ('Outlook not so good')
    break
  case 1:
    eightBall = ('Signs point to yes')
    break
  default:
    eightBall = ('Invalid Question')
}

console.log(eightBall)
