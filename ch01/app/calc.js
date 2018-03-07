// app/calc.js

function sum(arr) {
	return arr.reduce(function(a, b) {
		return a + b
	}, 0)
}

// Examples of 'reduce' from https://medium.freecodecamp.org/reduce-f47a7da511a9

// ES6
const euroses6 = [29.76, 41.85, 46.50];
const sumes6 = euroses6.reduce((total, amount) => total + amount)
console.log("sumes6: " + sumes6);

// ES5
var euroses5 = [29.76, 41.85, 46.50];
var sumes5 = euroses5.reduce( function (total, amount) {
	return total + amount;
});
console.log("sumes5: " + sumes5);


module.exports.sum = sum