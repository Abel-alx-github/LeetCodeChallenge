/**My 24th Leetcode challenge
68. Text Justification
Hard
Given an array of strings words and a width maxWidth, format the text such
that each line has exactly maxWidth characters and is fully (left and right) justified.
You should pack your words in a greedy approach; that is, pack as many words
as you can in each line. Pad extra spaces ' ' when necessary so that each line has
exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible.
If the number of spaces on a line does not divide evenly between words,
the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is
inserted between words.

Note:
A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.


 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
var fullJustify = function(words, maxWidth) {   
    // here your solution
}

*/

var fullJustify = function(words, maxWidth) {
    // Initialize an array to store the justified lines.
    let just = [];
    // Initialize an array to store the words in the current line.
    let curLine = [];
    // Initialize the current length of the words in the current line.
    let curLen = 0;
    // Initialize the index of the current word.
    let i = 0;

    // Iterate over the words until all words have been processed.
    while(i < words.length){
        // If adding the current word exceeds the maxWidth, process the current line.
        if(curLine.length + curLen + words[i].length > maxWidth){
            // Calculate the remaining space on the current line.
            let left = maxWidth - curLen;
            // Calculate the number of spaces between words. Handle the case where there's only one word.
            let sep = left / Math.max(1, curLine.length - 1);
            // Calculate the number of extra spaces needed.
            let extraSpe = left % Math.max(1, curLine.length - 1);
            // Add spaces between words, distributing extra spaces evenly.
            for(let j = 0; j < curLine.length - 1; j++){
                curLine[j] += " ".repeat(sep);
                if(extraSpe){
                    curLine[j] += " ";
                    extraSpe--;
                }
            }
            // Handle the case where there's only one word on the line.
            if(curLine.length === 1){
                curLine[0] += " ".repeat(sep)
            } 
            
            // Add the justified line to the result array.
            just.push(curLine.join(""));
            // Reset the current line and length.
            curLine = [];
            curLen = 0;
          
        // If adding the current word does not exceed the maxWidth, add it to the current line.
        } else{
            curLine.push(words[i]);
            curLen += words[i].length; 
            i++;
        }

    }

    // Handle the last line (left-justified).
    let lastLine = curLine.join(" ");
    just.push(lastLine.padEnd(maxWidth, " "));
    // Return the array of justified lines.
    return just;
};