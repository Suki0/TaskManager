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
        };

      });
   
  };


rl.question("",(input) =>{
  switch(input){
    case "add":
      
      rl.question("What is the description of the task?", (taskDesc) =>{ //flip the questions to name first and task after
        rl.question("What would you like to name the task", (taskName)=>{
          const data ={
            "Desc": taskDesc,
            "Name": taskName,
          }
          
          fileString = JSON.stringify(data,null,2)
          fs.writeFile(filepath,fileString, (err) =>{
            if(err){
              console.log(`${err}`)
            }
          })
        
        })
      })
  }
})


