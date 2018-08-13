// nested for loops and no selectie printing acts as an SQL cross join:
let myArray = [1, 2, 3]
let yourArray = ['a', 'b', 'c']

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    console.log(myArray[i] + ' ' + yourArray[j])
  }
}

// conditional print logic acts as an SQL inner join and GROUP BY:
let myPlaces = ['France', 'Canada', 'USA']
let friendPlaces = ['England', 'France', 'Germany']

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex])
    }
  }
}
