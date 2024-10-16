// my 19th leetcode challenge
/*

58. Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 *@ param {string} s
 *@ return {number}

 var lengthOfLastWord = function(s) {
    // here your solution
    }
 */


var lengthOfLastWord = function(s) {
    s = s.trim();
    if (s === "") {
        return 0;
    }
    const lastSpaceIndex = s.lastIndexOf(" ");
    let lastWord = (lastSpaceIndex === -1) ? s : s.substring(lastSpaceIndex);
    lastWord = lastWord.trim();

    return lastWord.length;
};
    
/*====== How It Works ============*/  
    
    // 1. Remove leading and trailing spaces from the string.

    // 2. If the string is empty after trimming, there's no last word.

    // 3. Find the index of the last space.  If no space is found,
    // lastIndexOf returns -1, indicating the entire string is the last word.

    // 4. Extract the substring starting from the last space (or the beginning if no space is found).
    //    substring(startIndex, endIndex) - endIndex is exclusive.  If endIndex is omitted, it goes to the end of the string.

    // 5. Remove any trailing spaces from the extracted last word.

    // 6. Return the length of the last word.