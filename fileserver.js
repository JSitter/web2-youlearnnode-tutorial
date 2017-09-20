const http = require('http');
const fs = require('fs');

server = http.createServer((request, response)=>{
	const { method, url, headers } = request;
	// console.log(url);
	// console.log(method);
	// console.log(headers)
	let fileStream = fs.createReadStream(process.argv[3])
	fileStream.on('open', ()=>{
		fileStream.pipe(response)
	})

});

server.listen(process.argv[2]);
