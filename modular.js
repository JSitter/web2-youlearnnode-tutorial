let fs = require('fs');
let path = require('path');


let file_list = [];
module.exports = function(folder_path, extension, callback){
	extension = "." + extension

	fs.readdir(folder_path, (err, list)=>{
		if(err){
			return callback(err);
		};
		for(index in list){
			if(path.extname(list[index]) === extension){
				file_list.push(list[index]);
			};
		};
		callback(null, file_list);

	});
};
