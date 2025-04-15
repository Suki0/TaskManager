// Import required modules
const fs = require('fs');
const readline = require('node:readline');

// Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the file path
const filepath = 'taskDB.json'; 

// Check if the file exists
if (fs.existsSync(filepath)) {
  console.log(`${filepath} exists.`);
  
} else {
  console.log(`${filepath} does not exist.`);

 
      const emptyData = {};
      const jsonString = JSON.stringify(emptyData, null, 2);

      fs.writeFile(filepath, jsonString, (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('File created successfully!');
        }

      });
   
  }


//fetches content of the JSON data
function read_file(){
}


rl.question('what is your name?', (userName)=>{
  const userData = {'name': userName}
  const jsonString = JSON.stringify(userData, null, 2)
  fs.writeFile(filepath,jsonString, (err)=>{
   if(err){
    console.log(err)
   } else{
    console.log("success!")
   }
  })
  console.log(userData.name)
})
