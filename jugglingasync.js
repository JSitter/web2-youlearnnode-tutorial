let http = require('http');

let page = [];

let requests = 0;

function getAsync( url , req_num ){


	let page_text = ""

	http.get(url, function(res){
		res.setEncoding('utf8');
		res.on('data', (chunk)=>{
			page_text = page_text + chunk

		}).on('end', function(){
			requests++;
			page[req_num] = page_text;
			if(requests == 3){
				console.log(page[0]);
				console.log(page[1]);
				console.log(page[2]);

				//console.log(page.length)
			}
		})

	})


}

getAsync(process.argv[2], 0);
getAsync(process.argv[3], 1);
getAsync(process.argv[4], 2);
