"use strict"

console.log("Inside functions.js");

/* TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello, " + name + "!";
}
/* TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
* console.log 'helloMessage' to check your work
*/
const helloMessage = sayHello("Kenneth");
console.log(helloMessage);

/* TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
const myName = "Kenneth";
console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/* TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 */
function isTwo(number) {
  return number === 2;
    }
// Call the function 'isTwo' passing the variable 'random' as a argument.
console.log(isTwo(random));

/* console.log *outside of the function* to check your work (you should see a
* different result everytime you refresh the page if you are using the random
* number)
*/


/* TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip

// Examples:
//  > calculateTip(0.20, 20) // returns 4
//  > calculateTip(0.25, 25.50) // returns 6.375
//  > calculateTip(0.15, 33.42) // returns 5.013
//
 */
function calculateTip(tipPercentage, totalBill) {
    return tipPercentage * totalBill;
}

/* TODO:
* Use prompt and alert in combination with your calculateTip function to
* prompt the user for the bill total and a percentage they would like to tip,
* then display the dollar amount they should tip
*/
const billTotal = prompt("Enter the total bill amount:");
const tipPercentage = prompt("Enter the tip percentage (as a decimal):");
const tipAmount = calculateTip(parseFloat(tipPercentage), parseFloat(billTotal));
alert("You should tip: $" + tipAmount);

/* TODO:
* Create a function named `applyDiscount`. This function should accept a price
* (before a discount is applied), and a discount percentage (a number between 0
* and 1). It should return the result of applying the discount to the original
* price.
*/

function applyDiscount(originalPrice, discountPercent) {
  return originalPrice - (originalPrice * discountPercent);
}
// Example:
let originalPrice = 100;
let discountPercent = .2; // 20%
applyDiscount(originalPrice, discountPercent) // 80
*
applyDiscount(45.99, 0.12) // 40.4712
