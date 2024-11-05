/* My 32th Leetcode challenge

30. Substring with Concatenation of All Words
You are given a string s and an array of strings words. All the strings of
 words are of the same length.
A concatenated string is a string that exactly contains all the strings of
any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef",
"cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is 
not a concatenated string because it is not the concatenation of any permutation
of words. Return an array of the starting indices of all the concatenated substrings
in s. You can return the answer in any order.

function findSubstring(s, words) {
    // your solution here
}

*/


function findSubstring(s, words) {
    // Check for empty input
    if (s.length === 0 || words.length === 0) return [];

    // Calculate the length of each word in the array
    const wordLength = words[0].length;
    const totalLength = words.length * wordLength;
    
    // Create a map to store the frequency of each word
    const wordMap = {};
    for (const word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }

    // Initialize variables
    const result = [];
    const wordCount = words.length;

    // Iterate over possible starting positions for substrings
    for (let i = 0; i < wordLength; i++ ) {
        let left = i, count = 0;
        let seen = {};

        // Check substrings of the given length starting from index i
        for (let j = i; j <= s.length - wordLength; j += wordLength) {
            const word = s.substr(j, wordLength);

            // If the current word is in the wordMap
            if (word in wordMap) {
                seen[word] = (seen[word] || 0) + 1;
                count++;

                // Adjust the window to maintain the count of words
                while (seen[word] > wordMap[word]) {
                    const firstWord = s.substr(left, wordLength);
                    seen[firstWord]--;
                    count--;
                    left += wordLength;
                }

                // If all words are found, add the starting index to the result
                if (count === wordCount) {
                    result.push(left);
                    const firstWord = s.substr(left, wordLength);
                    seen[firstWord]--;
                    count--;
                    left += wordLength;
                }
            } else {
                // If the current word is not in the wordMap, reset variables
                seen = {};
                count = 0;
                left = j + wordLength;
            }
        }
    }

    return result;
}