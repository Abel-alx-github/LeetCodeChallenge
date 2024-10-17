/*
My 20th Leetcode Challenge

Problem
14. Longest Common Prefix
Write a function to find the longest common prefix string
amongst an array of strings.

If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    // here your solution
    }

 */


var longestCommonPrefix = function(strs) {
    // Initialize the prefix variable with the first string in the array
    let prefix = strs[0]; 
    
    // Iterate through each string in the array starting from the second string
    for(let i = 1; i < strs.length; i++){
        // Continue as long as there is a prefix to check
        while(prefix.length) {
            // Check if the current string starts with the current prefix
            if(!strs[i].startsWith(prefix)){
                // If not, reduce the prefix by one character from the end
                prefix = prefix.substring(0, prefix.length - 1);
            } else {
                // If it does start with the prefix, break out of the loop
                break;
            }
        }
    }
    // Return the longest common prefix found
    return prefix;
};