console.log("Inside while.js");

// Initialize a variable to store the starting value
let number = 2;

// Create a while loop that uses console.log() to create the specified output
while (number <= 65536) {
    console.log(number);
    number *= 2; // Multiply the number by 2 in each iteration
}

// Generate a random number between 50 and 100 representing the total number of cones
let allCones = Math.floor(Math.random() * 50) + 50;

do {
    // Generate a random number between 1 and 5 representing the cones bought by a customer
    let conesBought = Math.floor(Math.random() * 5) + 1;

    // Check if there are enough cones to sell
    if (conesBought <= allCones) {
        console.log(`${conesBought} cones sold...`);
        allCones -= conesBought; // Subtract the sold cones from the total
    } else {
        console.log(`Cannot sell you ${conesBought} cones. I only have ${allCones}...`);
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");