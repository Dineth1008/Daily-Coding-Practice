/**
 * Problem: Reverse a given string.
 * Approach: Loop through the string from the end to the beginning and build a new string.
 */

function reverseString(str) {
    let reversed = "";
    
    // get last character to first charactor
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}

// Test case 
const originalText = "Software Engineering";
console.log("Original String:", originalText);
console.log("Reversed String:", reverseString(originalText));
