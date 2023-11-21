console.log("Inside objects.js");

/*
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 */
const person = {
    firstName: "Kenneth" ,
    lastName: "Williams"

};
console.log(person);

/* Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */

/*
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 */
person.sayHello = function () {
    return "Hello from " + this.firstName + " " + this.lastName + "!";
};
console.log(person.sayHello());
/* Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

/* TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
     {name: 'Cameron', amount: 180},
     {name: 'Ryan', amount: 250},
     {name: 'George', amount: 320}
 ];

 shoppers.forEach(function (shopper) {
     var discountRate = 0.12;
     var discountAmount = 0;

     if (shopper.amount > 200) {
         discountAmount = shopper.amount * discountRate;
     }
     var finalAmount = shopper.amount - discountAmount;
     console.log(`${shopper.name} spent $${shopper.amount.toFixed(2)}.`);
     console.log(`Discount: $${discountAmount.toFixed(2)}.`);
     console.log(`Final amount after discount: $${finalAmount.toFixed(2)}.`);
 });

/* TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 */
const books = [
    createBook("Captain Underpants", "Dav Pilkey"),
    {
        title: "The Salmon of Doubt",
        author: { firstName: "Douglas", lastName: "Adams" }
    },
    {
        title: "Walkaway",
        author: { firstName: "Cory", lastName: "Doctorow" }
    },
    {
        title: "A Brief History of Time",
        author: { firstName: "Stephen", lastName: "Hawking" }
    },
    {
        title: "Dressed to Kill",
        author: { firstName: "Dapper", lastName: "Dan" }
    },
    {
        title: "God Of War Kratos and The Boy who Would Become the Giant's Savior",
        author:{ firstName: "David", lastName: "Jaffe" }
    },
    {
        title: "Goosebumps",
        author: { firstName: "R.L.", lastName: "Stine" }
    },
    {
        title: "Call Me When Your Lonely",
        author: { firstName: "Kenny", lastName: "Casanova" }
    },
    {
        title: "How to Code Web Development For Newbies",
        author: {firstName: "Google", lastName: "ChatGPT"}
    },

];

/* Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
console.log(books[6].title)
console.log(books[6].author.firstName)
 console.log(books[6].author.lastName)
/*
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
books.forEach(function (book, index) {
    console.log(`Book # ${index + 1}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    console.log("---");
});
/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
*/

function createBook(title, authorName) {
    const name = authorName.split(" ");
    return {
        title,
        author: {
            firstName: name[0],
            lastName: name[1]
        }
    }
}
 /*  Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
function showBookInfo(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
}
