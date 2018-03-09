//read a file using the synchronous interface of the fs module:

const fs = require('fs')
let content
try {
	content = fs.readFileSync('file.md', 'utf-8')
} catch (ex) {
	console.log('ERROR: ', ex)
}
console.log(content)
