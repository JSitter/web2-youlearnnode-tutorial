let fs = require('fs');

let file_path = process.argv[2];
let new_lines = 0

fs.readFile(file_path, 'utf8', (err, ret_data)=>{

	let arr = ret_data.split("\n");
	console.log(arr.length - 1)


});
