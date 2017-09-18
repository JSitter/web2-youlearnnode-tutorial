let http = require('http')

let page = ""

http.get(process.argv[2], function(res){
	res.setEncoding('utf8');
	res.on('data', (chunk)=>{
		page = page + chunk

	}).on('end', function(){
		console.log(page.toString().length)
		console.log(page)
	})

})
