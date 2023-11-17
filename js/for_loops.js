console.log("Inside loops.js");
// For Loop Exercises
/* TODO
/* Create a function named showMultiplicationTable
/* that accepts a number and console.logs the multiplication table for that number
/* (just multiply by the numbers 1 through 10)
*/
/*
const showMultiplicationTable = number => {
    for (let i = 1; i <= 10; i++) {
          console.log(`${number} x ${i} = ${number * i}`);
    }
};

/*
 * Use a for loop and generate 10 random numbers between 20 and 200.
 * Output to the console whether each number is odd or even.
 */

for (let i = 0; i < 10; i++) {
  // Generate a random number between 20 and 200
  const randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

  // Check if the random number is odd or even
  if (randomNumber % 2 === 0) {
    console.log(`${randomNumber} is even`);
  } else {
    console.log(`${randomNumber} is odd`);
  }
}

for(let i = 1; i <= 9; i++) {
  let output = '';
  for (let j = 1; j <= i; j++) {
    output += i;
  }
  console.log(output);
}

for (let i = 100; i >= 5; i -= 5) {
  console.log(i);
}


