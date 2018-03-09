// higherorderfunctions.js

/*
	Functions that can take other functions as 
	arguments are called higher-order functions.
*/

const numbers = [2, 4, 1, 5, 4, -8]

function isBiggerThanTwo (num) {
	return num > 2
}

console.log(numbers.filter(isBiggerThanTwo))
