/* My 26th Leetcode Challenge

392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t,
or false otherwise.
A subsequence of a string is a new string that is formed from the
original string by deleting some (can be none) of the characters 
without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

*/

/**
 * Determines if string `s` is a subsequence of string `t`.
 * A subsequence is a sequence that can be derived from another sequence 
 * by deleting some or no elements without changing the order of the remaining elements.
 *
 * @param {string} s The potential subsequence string.
 * @param {string} t The string to check against.
 * @return {boolean} True if `s` is a subsequence of `t`, false otherwise.
 */

var isSubsequence = function(s, t) {
    let i = 0; // Index for traversing string s

    // Iterate through each character in string s
    for(const sub of s){
        // From index i, take the remaining portion of string t.
        t = t.substring(i); 
        //If the current character from s is not found in the remaining 
        //portion of t, s is not a subsequence.
        if(!t.includes(sub)) return false;

        //Find the index of the current character from s in the remaining portion 
        //of t and update i for next iteration.
        i = t.indexOf(sub) + 1; 
    }
    //If all characters in s are found in t in the correct order, s is a subsequence.
    return true;
};