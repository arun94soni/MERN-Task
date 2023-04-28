// Import the 'fs' module
const fs = require('fs');

// Read the local directory and list all file names
fs.readdir('./', (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  // Print the file names
  files.forEach((file) => {
    console.log(file);
  });
});
