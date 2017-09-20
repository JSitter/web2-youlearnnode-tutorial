const http = require('http');
const fs = require('fs');

server = http.createServer((request, response)=>{
	stream = fs.createReadStream(request)
	stream.on('open', ()=>{
		stream.pipe()
	})
});
console.log(process.argv[2])
server.listen(process.argv[2]);
