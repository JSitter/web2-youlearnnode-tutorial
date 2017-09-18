
let summing = 0
for( let index = 2; index < process.argv.length; index++){
    summing += parseInt(process.argv[index])
}

console.log(summing)