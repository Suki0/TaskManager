// Import required modules
const fs = require('fs');
const readline = require('node:readline');

// Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the file path
const filepath = 'C:/Users/AVENg/Desktop/task/taskDB.json'; 

// Check if the file exists
if (fs.existsSync(filepath)) {
  console.log(`${filepath} exists.`);
  rl.close();
} else {
  console.log(`${filepath} does not exist.`);

  rl.question('Do you want me to create this file for you? (Y/N): ', (answer) => {
    if (answer.toUpperCase() === 'Y') {
      const emptyData = {};
      const jsonString = JSON.stringify(emptyData, null, 2);

      fs.writeFile(filepath, jsonString, (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('File created successfully!');
        }
        rl.close(); // Always close readline idiot
      });
    } else {
      console.log('File not created.');
      rl.close();
    }
  });
}
