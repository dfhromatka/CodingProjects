let userName = 'Dave'

if (userName === '') {
  console.log('Hello, what would you like to know?')
} else {
  console.log('Hello, ' + userName + ' what would you like to know?')
}

let userQuestion = 'Will I ever stop getting high?'

console.log(userQuestion)

let randomNumber = Math.floor(Math.random() * 8)
// let eightBall = ''

switch (randomNumber) {
  case 0:
    console.log('It is Certain')
    break
  case 2:
    console.log('It is decidedly so')
    break
  case 3:
    console.log('Reply hazy try again')
    break
  case 4:
    console.log('Cannot predict now')
    break
  case 5:
    console.log('Do not count on it')
    break
  case 6:
    console.log('My sources say no')
    break
  case 7:
    console.log('Outlook not so good')
    break
  case 1:
    console.log('Signs point to yes')
    break
  default:
    console.log('Invalid Question')
}
