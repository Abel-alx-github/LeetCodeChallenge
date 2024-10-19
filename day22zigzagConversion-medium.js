/*
My 22th leetcode challenge

6. Zigzag Conversion
Medium
The string "PAYPALISHIRING" is written in a zigzag pattern on
a given number of rows like this: (you may want to display this
pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this
 conversion given a number of rows:

string convert(string s, int numRows);

var convert = function(s, numRows) {
    // here your solution
} 
*/

var convert = function(s, numRows) {
    // Check for base cases: if the string length is less than 2 or
    // numRows is less than 2 or greater than the string length, return the string as is.
    if(s.length < 2 || numRows < 2 || numRows > s.length) return s;

    // Create an array to hold strings for each row, initialized to empty strings.
    let rows = new Array(numRows).fill('');
    
    // Direction flag to track whether we are moving down or up in the zigzag pattern.
    let isGoingDown = false;
    
    // Start at the top row (index 0).
    let currentRow = 0;

    // Iterate through each character in the input string.
    for(let char of s){
        // Add the current character to the appropriate row.
        rows[currentRow] += char;

        // Check if we are at the first row; if so, change direction to down.
        if(currentRow === 0){
            isGoingDown = true;
        } 
        // Check if we are at the last row; if so, change direction to up.
        else if (currentRow === numRows - 1){
            isGoingDown = false;
        }

        // Update the current row based on the direction we are moving.
        currentRow += isGoingDown ? 1 : -1;
    }

    // Join all strings in the rows array to form the final zigzag string and return it.
    return rows.join("");
};