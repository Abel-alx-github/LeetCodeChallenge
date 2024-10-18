/*
My 21th Leetcode Challenge

151. Reverse Words in a String
Medium
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters.
The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces
between two words. The returned string should only have a single space
separating the words. Do not include any extra spaces.

 * @param {string} s
 * @return {string}

var reverseWords = function(s) {
 //   here your solution
}
*/

// Function to reverse the order of words in a string
var reverseWords = function(s) {
    let lastSpaceIdx; // Variable to store the index of the last space character
    let reversedStr = ''; // Variable to store the reversed string
    let subStr = s.trim(); // Remove leading and trailing whitespaces

    // Continue processing the string until there are no more words left
    while(subStr) {
        subStr = subStr.trim(); // Trim any leading or trailing whitespaces
        lastSpaceIdx = subStr.lastIndexOf(' '); // Find the index of the last space character
        reversedStr += subStr.substring(lastSpaceIdx + 1) + ' '; // Append the word to the reversed string
        subStr = subStr.substring(0, lastSpaceIdx); // Update the string to exclude the last word
    }

    return reversedStr.trim(); // Return the reversed string without leading or trailing whitespaces
}