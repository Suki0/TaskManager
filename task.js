//imports file system module
const fs = require('fs')

//grabs readline module
const readline = require('node:readline');

//creates the input and output terminal for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const filepath  = '"C:/Users/AVENg/Desktop/task/taskDB.json'
if (fs.existsSync(filepath)){
    console.log(`${filepath} exist`)
} else{
    console.log(`${filepath} does not exist`)
    rl.question("Do you want me to create this file for you? Y/N: ", (answer) => answer=="Y" ? console.log("yes") : console.log("ts icl ts pmo")
)}


