const fs = require('fs')

console.log('start reading file...')

fs.readFile('file.md', 'utf-8', function(err, content) {
	if (err) {
		console.log('something went wrong with file read!')
		return console.log(err)
	}

	console.log(content)
})

console.log('end of the file')

/*
	Two things to notice here:

	*	Error-handling: instead of a try-catch block you
		have to chek for errors in the callback

	*	No return value: async functions don't return 
		values but values will be passed to the callbacks
*/