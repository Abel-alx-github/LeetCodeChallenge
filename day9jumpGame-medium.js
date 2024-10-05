/*

55. Jump Game
Medium

You are given an integer array nums. You are initially positioned
 at the array's first index, and each element in the array represents 
 your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/

// Solution 1 applying greedy approach

// time complexity: O(n) where n is the length of the nums array
// space complexity: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0; // Track the farthest reachable index

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        // If the current index is greater than the farthest reachable index, return false
        if (currentIndex > farthest) {
            return false; 
        }
        // Update the farthest index
        farthest = Math.max(farthest, currentIndex + nums[currentIndex]);
        // If we can reach the last index, return true
        if (farthest >= nums.length - 1) {
            return true;
        }
    }

    return false; // If we exit the loop, we cannot reach the last index
};


//  how it works

/*
Initialization: Start with a variable farthest to keep track of the maximum reachable index.
Loop Through the Array:
If the current index i exceeds farthest, it means you cannot reach this index, so return false.
Update farthest to be the maximum of its current value and i + nums[i].
If farthest reaches or exceeds the last index, return true.
Return False: If the loop completes without being able to reach the last index, return false.

*/

// Note 

/*
The greedy approach is a problem-solving strategy that builds up a solution piece by piece, 
always choosing the next piece that offers the most immediate benefit.
In the context of the "Jump Game" problem, the greedy approach focuses on
maximizing the farthest reachable index at each step.
*/