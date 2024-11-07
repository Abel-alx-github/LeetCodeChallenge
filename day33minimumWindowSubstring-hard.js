/*

76. Minimum Window Substring
Hard
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window.
  If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

*/


var minWindow = function(s, t) {
    // Check for edge cases
    if (!t || !s || s.length < t.length) return "";

    // Initialize window object, countT object, result array, and left pointer
    let window = {};
    let countT = {};
    let res = [Infinity, -1, -1];
    let left = 0;

    // Populate countT object with characters from string t
    for (let c of t) {
        countT[c] = 1 + (countT[c] ? countT[c] : 0);
    }

    // Calculate the number of unique characters in t
    let req = Object.keys(countT).length;
    let found = 0;

    // Sliding window approach
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        // Expand the window by adding characters
        window[c] = 1 + (window[c] ? window[c] : 0);

        // Update 'found' if the character in s matches the character in t
        if (countT[c] && window[c] == countT[c]) {
            found += 1;
        }

        // If all characters in t are found in the window, contract the window
        while (found === req) {
            // Update result if a smaller window is found
            if ((right - left + 1) < res[0]) {
                res[0] = right - left + 1;
                res[1] = left;
                res[2] = right;
            }
            // Contract the window by moving the left pointer
            window[s[left]] -= 1;
            // Update 'found' if the character is no longer matching the count in t
            if (countT[s[left]] && window[s[left]] < countT[s[left]]) {
                found -= 1;
            }
            left += 1;
        }
    }

    // Return the minimum window substring
    return (res[0] !== Infinity ? s.slice(res[1], res[2] + 1) : "");
};