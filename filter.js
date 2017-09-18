let fs = require('fs');
let path = require('path')
let folder_path = process.argv[2];
let extension = "." + process.argv[3];
let file_list = [];

fs.readdir(folder_path, (err, list)=>{
    for( index in list ){
        if(path.extname( list[index]) === extension ){
            
            file_list.push(list[index]);
        };
    };
    for(index in file_list){
        console.log(file_list[index])
    }
});

