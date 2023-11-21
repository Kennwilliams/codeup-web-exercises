console.log("Inside challenges.js");

// Defanging IP Address - Leetcode

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
//
//     A defanged IP address replaces every period "." with "[.]".

// /**
//  * @param {string} address
//  * @return {string}
//  */
// var defangIPaddr = function(address) {
//     // change each '.' to be '[.]'
//     return address.replaceAll(".", "[.]");
// };
//
// console.log(defangIPaddr("1.1.1.1")); // expect "1[.]1[.]1[.]1"



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Defuse the Bomb - Leetcode
//
// /**
//  * @param {number[]} code
//  * @param {number} k
//  * @return {number[]}
//  */
// var decrypt = function(code, k) {
//     let decryptedCode = [...code];
//     if(k > 0) {
//         // run instructions based on the first bullet point
//         for (let i = 0; i < code.length; i++) {
//             // replace decryptedCode[i] with the sum of the next 'k' items
//             let total = 0;
//             for(let j = i + 1; j <= i + k; j++){
//                 if(j > code.length - 1) {
//                     total += code[j - code.length]
//                 } else {
//                     total += code[j];
//                 }
//             }
//             decryptedCode[i] = total;
//         }
//     }
//     if(k < 0) {
//         // run instructions based on the second bullet point
//         for (let i = 0; i < code.length; i++) {
//             // replace decryptedCode[i] with the sum of the previous 'k' items
//             let total = 0;
//             for(let j = i - 1; j >= i + k; j--){
//                 if(j < 0) {
//                     total += code[j + code.length]
//                 } else {
//                     total += code[j];
//                 }
//             }
//             decryptedCode[i] = total;
//         }
//     }
//     if(k === 0) {
//         // run instructions based on the last bullet point
//         for (let i = 0; i < code.length; i++) {
//             decryptedCode[i] = 0;
//         }
//     }
//     return decryptedCode;
// };
//
// console.log(decrypt([5, 7, 1, 4], 3));



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Neutralisation - Codewars https://www.codewars.com/kata/65128732b5aff40032a3d8f0


// ("--++--", "++--++") ➞ "000000"
//
// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"
//
// ("-++-", "-+-+") ➞ "-+00"


// "--++--" converts to ['-', '-', '+', '+', '-', '-']


// function neutralise(str1, str2) {
//     let returnString = '';
//     for (let i = 0; i < str1.length; i++) {
//         if(str1[i] === str2[i]) {
//             // concatenate + or - to the return string
//             returnString += str1[i];
//         } else {
//             // concatenate 0 to the return string
//             returnString += '0';
//         }
//     }
//
//     // Here be dragons!
//     return returnString;
// }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Flick Switch - Codewars https://www.codewars.com/kata/64fbfe2618692c2018ebbddb


function flickSwitch(array){
    // Create an accumulator that will hold the true or false values
    const returnArray = [];
    // Create a variable to hold what our previous boolean value was
    let currentBoolean = true;
    for(const word of array) {
        // check to see if the word is 'flick'

    }

    // Return the accumulator
}