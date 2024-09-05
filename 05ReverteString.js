let string = process.argv[2]
let revertidaString = "";
for (let i = string.length - 1; i >= 0; i--) 
    revertidaString += string[i];
console.log(revertidaString)