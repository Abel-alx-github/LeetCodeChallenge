/* My 31th Leetcode Challenge
3. Longest Substring Without Repeating Characters
Medium
Given a string s, find the length of the longest 
substring
 without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

// Function to find the length of the longest substring without repeating characters
var lengthOfLongestSubstring = function(s) {
    let long = 0; // Initialize the length of the longest substring
    let i = 0; // Initialize the starting index of the current substring
    
    const set = new Set(); // Create a Set to store unique characters
    
    // Iterate through each character in the input string
    for (let char of s) {
        // Check if the current character is already in the Set
        while (set.has(char)) {
            set.delete(s[i]); // Remove characters from the beginning until the duplicate character is removed
            i++; // Move the starting index of the substring
        }
        
        set.add(char); // Add the current character to the Set
        long = Math.max(long, set.size); // Update the length of the longest substring
    }
    
    return long; // Return the length of the longest substring without repeating characters
};