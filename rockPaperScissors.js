let tempChoice = 'rock'

function getUserChoice(userInput) {
  return (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') ? userInput.toLowerCase() : 'invalid'
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
    default:
      return 'error'
  }
}

let userChoice = getUserChoice(tempChoice)
let compChoice = getComputerChoice()

const determineWinner = () => {
  if (userChoice === 'invalid') {
    return 'invalid game'
  } else {
    if (userChoice === compChoice) {
      return 'tie game'
    } else {
      if (userChoice === 'rock') {
        if (compChoice === 'scissors') {
          return 'user wins'
        } else {
          return 'computer wins'
        }
      }
      if (userChoice === 'paper') {
        if (compChoice === 'rock') {
          return 'user wins'
        } else {
          return 'computer wins'
        }
      }
      if (userChoice === 'scissors') {
        if (compChoice === 'paper') {
          return 'user wins'
        }
      } else {
        return 'computer wins'
      }
    }
  }
}
console.log(userChoice)
console.log(compChoice)
console.log(determineWinner())
