/*
My 18th leetcode challenge -  Integer to Roman
12. Integer to Roman
Medium

Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are formed by appending the conversions of
decimal place values from highest to lowest. Converting a
decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the
maximal value that can be subtracted from the input, append that
symbol to the result, subtract its value, and convert the remainder
to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing
one symbol subtracted from the following symbol, for example, 4 is 1 (I)
less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following
subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times
to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times.
If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

 * @param {number} num
 * @return {string}

var intToRoman = function(num) {
    // here your solution
}

*/
var intToRoman = function(num) {
    // Create a map to store the integer-Roman numeral pairs.  
    // Note: This map is cleverly designed to handle subtractive notation (e.g., IV, IX, XL, etc.) efficiently.
    let intRoman = {
        1 : "I", 4 : "IV", 5 : "V", 9 : "IX", 10 : "X",
        40 : "XL", 50 : "L", 90 : "XC", 100 : "C",
        400 : "CD", 500 : "D", 900 : "CM", 1000 : "M"
    };

    // Extract the keys (integers) and values (Roman numerals) from the map.
    const integer = Object.keys(intRoman).map(Number); //Convert keys to numbers explicitly.
    const roman = Object.values(intRoman);

    // Initialize the index for iterating through the integer-Roman numeral pairs.
    // We start from the largest integer (1000) and work our way down.
    let i = integer.length - 1; //More efficient than hardcoding 12.
    let result = ""; // Initialize an empty string to store the resulting Roman numeral.

    // Iterate through the integer-Roman numeral pairs from largest to smallest.
    while(i >= 0){
        // If the current integer is less than or equal to the input number,
        // append the corresponding Roman numeral to the result and subtract the integer from the input number.
        if(num >= integer[i]){
            result += roman[i];
            num -= integer[i];
        } else {
            // Otherwise, move to the next smaller integer.
            i--;
        }
    }

    // Return the resulting Roman numeral string.
    return result;
};