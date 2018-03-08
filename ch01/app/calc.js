// app/calc.js

function sum(arr) {
	return arr.reduce(function(a, b) {
		return a + b
	}, 0)
}

// Examples of 'reduce' from https://medium.freecodecamp.org/reduce-f47a7da511a9
// ES6
const euroses6 = [29.76, 41.85, 46.50];
const sumes6 = euroses6.reduce((total, amount) => total + amount);
console.log("sumes6: " + sumes6);

// ES5
var euroses5 = [29.76, 41.85, 46.50];
var sumes5 = euroses5.reduce( function (total, amount) {
	return total + amount;
});
console.log("sumes5: " + sumes5);

// Examples from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  
//	REDUCE TAKES FOUR VALUES:
//	function(accumulator, currentValue, currentIndex, array)

// Flatten an array of arrays
var flattened = [[0,1],[2,3],[4,5]].reduce(
 ( accumulator, currentValue ) => accumulator.concat(currentValue), []
);
console.log("flattened: " + flattened);

// Counting instances of values in an object
var names = ['Alice', 'Bob', 'Carrie', 'Alice', 'Darvish', 'Edwina', 'Tom', 'Tom', 'Alice'];
var countedNames = names.reduce(function (allNames, name) {
	if (name in allNames) {
		allNames[name]++;
	} else {
		allNames[name] = 1;
	}
	return allNames;
}, {}); // {} "invokes" the function immediately

console.log("countedNames: ", countedNames);

module.exports.sum = sum