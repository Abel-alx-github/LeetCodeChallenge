/*
    My 23th Leetcode challenge

28. Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index 
of the first occurrence of needle in haystack, or -1 
if needle is not part of haystack.

 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 
var strStr = function(haystack, needle) {
    // here your solutoon
};
*/

// Solution 1
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// solution 2

var strStr = function(haystack, needle) {
   for(let i = 0; i < haystack.length - needle.length){
    if(haystack.slice(i, i + needle.length) === needle){
        return i;
    }
   }
    return -1;
};