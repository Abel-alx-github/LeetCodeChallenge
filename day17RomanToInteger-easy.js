
/* my 17th leetcode challenge

13. Roman to Integer
Easy
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together.
12 is written as XII, which is simply X + II. The number 27 is written as XXVII,
which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX.
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
    // here your solution
}

*/

// Function to convert a Roman numeral to an integer
var romanToInt = function(s) {
    // Object to store the values of Roman numerals
    let keyValue = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

    // Get the length of the input Roman numeral
    let len = s.length;
    let intSum = 0;

    // Iterate through the Roman numeral string from right to left
    for (let i = len - 1; i >= 0; i--) {
        // If it's the rightmost numeral, add its value to the sum
        if (i === len - 1) {
            intSum += keyValue[s[i]];
        } else if (keyValue[s[i]] >= keyValue[s[i + 1]]) {
            // If the current numeral is greater than or equal to the next one, add its value to the sum
            intSum += keyValue[s[i]];
        } else {
            // If the current numeral is less than the next one, subtract its value from the sum
            intSum -= keyValue[s[i]];
        }
    }

    // Return the calculated integer value
    return intSum;
};