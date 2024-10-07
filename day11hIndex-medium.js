
/*

My 1th LeetCode Challenge

 🤔 Can you come up with an algorithm that runs in O(n) time and O(1) space complexity?
 274. H-Index
Medium
Given an array of integers citations where citations[i] is the number
of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia:
The h-index is defined as the maximum value of h such 
that the given researcher has published at least h papers 
that have each been cited at least h times.

 
 * @param {number[]} citations
 * @return {number}

var hIndex = function(citations) {
// here your solution
}

*/


var hIndex = function(citations) {
    let len = citations.length;
    // Use len + 1 to accommodate citations greater than or equal to the number of papers.
    let countPaper = new Array(len + 1).fill(0); 

    for(let c of citations) {
        // Correctly handle citations exceeding the number of papers.
        let min = Math.min(c, len);  
        countPaper[min] += 1;
    }

    let paper = 0;
    // Iterate from the highest possible h-index downwards.
    for(let i = len; i >= 0; i--){
        paper += countPaper[i];
        // Check if the current h-index is valid.
        if (i <= paper) {
            return i;
        }
    }
    // If no valid h-index is found, return 0.
    return 0; 
}


// How it works

/*
countPaper Array Size:
     The countPaper array is size len + 1. This is crucial to handle
     cases where a citation count is greater than or equal to the total number
     of papers (len).
 
min Calculation: 
    The min calculation is adjusted to Math.min(c, len).
    This ensures that the index used to update countPaper
    is always within the bounds of the array.

Loop and Return:
    The loop now correctly iterates from len down to 0.
    The paper count is updated at each iteration.
    If the current h-index is valid, it is returned.
    If no valid h-index is found, the function returns 0.
*/



// solution 2
/*
var hIndex = function(citations) {

    citations.sort();
    let h = citations.length ;
    
    for(let i = 0; i < citations.length; i++){
        if(citations[i] >= h) return h;

        else h--;

    }

    return h
};
*/