var fs = require('fs')

let path_to_file = process.argv[2]

//console.log(process.argv[2])
let buffer = fs.readFileSync(path_to_file)

let arry = buffer.toString().split("\n")

console.log(arry.length - 1)