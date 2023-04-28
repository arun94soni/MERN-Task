function isPrime(number) {
    // Check for invalid input and edge cases
    if (typeof number !== 'number' || !Number.isInteger(number) || number < 2) {
      return false;
    }
  
    // Check if the number is divisible by any number up to its square root
    for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test the isPrime function
  const firstNumber = 2;
  const secondNumber = 4;
  const thirdNumber = 7;
  const fourthNumber = 9;
  const fifthNumber = 15;
  
  if (isPrime(secondNumber)) {
    console.log(`${secondNumber} is a prime number.`);
  } else {
    console.log(`${secondNumber} is not a prime number.`);
  }
  