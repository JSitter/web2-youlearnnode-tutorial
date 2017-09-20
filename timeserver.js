let date = new Date()
const net = require('net')

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();

const pad = function(integer){
	if(integer<10){
		return "0" + integer.toString();
	}else{
		return integer.toString();
	};
};

let cur_date = year + "-" + pad(month) + "-" + pad(day) + " "+ pad(hours)+":"+pad(minutes)+"\n";

const server = net.createServer((socket)=>{
	socket.write(cur_date);
	socket.end()
})

server.listen(process.argv[2])
