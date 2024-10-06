/*

45. Jump Game II
medium

You are given a 0-indexed array of integers nums of length n.
You are initially positioned at nums[0].
Each element nums[i] represents the maximum length of a forward jump from index i.
In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1].
The test cases are generated such that you can reach nums[n - 1].


 * @param {number[]} nums
 * @return {number}

var jump = function(nums) {
 // here your solution
}

*/


// Solution 1 applying greedy approach
var jump = function(nums) {

    let jump = 0; // Count the number of jumps taken to reach the last index
    let jumpLength = 0; // Tracks the maximum reachable index from the current jump
    let j = 0; // Represents the end of the current jump range

    for (let i = 0; i < nums.length - 1; i++) {
        // Update jumpLength to the farthest index we can reach from the current position
        jumpLength = Math.max(jumpLength, nums[i] + i);

        // If we've reached the end of the current jump range
        if (i === j) {
            // Prepare for the next jump by updating j to the new maximum reachable index
            j = jumpLength; 
            jump++; // Increment the jump count
        }
    }

    return jump; // Return the total number of jumps needed to reach the last index
}


// time complexity: O(n) where n is the length of the nums array
// space complexity: O(1)


// How it works

/*

Initialization:
jump: This variable counts how many jumps you’ve made to reach the last index.

jumpLength: This keeps track of the farthest index you can reach from the current jump range.

j: This marks the end of the current jump range; it's the maximum index you can reach with the jumps you've made so far.

Loop Through the Array:
The loop iterates from the first index to the second-to-last index (nums.length - 1), since the last index doesn’t require a jump.
Update the Farthest Reachable Index:

jumpLength = Math.max(jumpLength, nums[i] + i): This line calculates the farthest index you can reach from the current index i. It compares the current jumpLength with the furthest you can reach from i, which is nums[i] + i.

Check if You Need to Jump:
if (i === j): This checks if you’ve reached the end of the current jump range. If true, it means you need to make a jump to progress.
j = jumpLength: Update j to the new farthest index you can reach after the jump.
jum++: Increment the jump count since you are making a jump.

Return the Jump Count:
After the loop, return jum; returns the total number of jumps needed to reach the last index.
*/