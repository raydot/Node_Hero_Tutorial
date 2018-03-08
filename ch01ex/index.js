/*
// write a small application that asks the user for two numbers to 
// enter from the standard input and print the result after it. 
// (hint: use the readline module: https://nodejs.org/api/readline.html) */

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Who rules?! ", (answer) => {
	console.log(`Yes, you are right.  ${ answer } rules!`);
	rl.close();
})

// Not working, probably because of multiple values.  Hanging this up, seems unimportant.
// rl.question("Please enter two numbers: "), (ans1, ans2) => {
// 	let sumtotal = ans1 + ans2;
// 	console.log(`${ ans1 } + ${ ans2 } = ${ sumtotal }` );
// 	rl.close();
// }
