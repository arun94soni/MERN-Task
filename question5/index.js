function displayPattern(n) {
    // Print the first row
    let row = '';
    for (let i = 0; i < n; i++) {
      row += '*';
    }
    console.log(row);
  
    // Print the middle rows
    for (let i = 1; i < n - 1; i++) {
      row = '*';
      for (let j = 1; j < n - i; j++) {
        if (j === n - i - 1) {
          row += '*';
        } else {
          row += ' ';
        }
      }
      console.log(row);
    }
  
    // Print the last row
    if (n > 1) {
      console.log('*');
    }
  }
  
  // Calling function with patternSize
  const patternSize = 6;
  displayPattern(patternSize);
  