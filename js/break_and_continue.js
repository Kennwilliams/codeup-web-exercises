console.log("Inside break_and_continue.js");

// Prompt the user for an odd number between 1 and 50
let userNumber;

// Use a loop and a break statement to continue prompting the user if they enter invalid input
while (true) {
    userNumber = prompt("Enter an odd number between 1 and 50:");

    // Validate the input
    if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
        break; // Exit the loop if the input is valid
    } else {
        alert("Invalid input. Please enter a valid odd number between 1 and 50.");
    }
}

console.log(`Number to skip is: ${userNumber}`);

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }

    if (i === parseInt(userNumber)) {
        console.log(`Yikes! Skipping number: ${userNumber}`);
        continue; // Skip the user's number
    }

    console.log(`Here is an odd number: ${i}`);
}