let folderlist = require('./modular.js');

let folder_path = process.argv[2];
let extension = process.argv[3];

folderlist(folder_path, extension, (err, data)=>{
	for(index in data){
		console.log(data[index]);
	};
});
