/** My 25th leetcode challenge

125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase 
letters into lowercase letters and removing all non-alphanumeric 
characters, it reads the same forward and backward. Alphanumeric 
characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    // here your code
}
 */


// solution 1

var isPalindrome = function(s) {
    // Initialize pointers for the start and end of the string
    let i = 0, j = s.length - 1;
    // Convert the input string to lowercase
    s = s.toLowerCase();
    // Loop until the pointers meet
    while (i < j) {
        // Skip non-alphanumeric characters from the start pointer
        if (!(s[i] >= '0' && s[i] <= '9') && !(s[i] >= 'a' && s[i] <= 'z')) {
            i++;
            continue;
        }
        // Skip non-alphanumeric characters from the end pointer
        if (!(s[j] >= '0' && s[j] <= '9') && !(s[j] >= 'a' && s[j] <= 'z')) {
            j--;
            continue;
        }
        // Check if the characters at the pointers are equal
        if (s[i] === s[j]) {
            i++;
            j--;
            continue;
        } 
        // If characters are not equal, return false
        return false;
    }
    // If the loop completes without returning false, the string is a palindrome
    return true;
};

//solution 2
/*
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^0-9a-z]/g,"");
    let i = 0, j = s.length - 1;

    while(i < j){
        if(s[i] !== s[j]) return false;

        i++;
        j--;
    }
    return true;
}
    */