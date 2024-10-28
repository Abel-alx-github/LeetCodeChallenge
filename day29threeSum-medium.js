/** My 29th leetcode challenge 
 * 15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

var threeSum = function(nums) {
// here your solution
}

*/

var threeSum = function(nums) {
    // Step 1: Initialize an array to store the unique triplets.
    const threeSum = [];
    let left, right;

    // Step 2: Sort the input array to facilitate the two-pointer approach.
    nums.sort((a, b) => a - b);

    // Step 3: Iterate through the array to find triplets.
    for (let i = 0; i < nums.length - 2; i++) {
        // Step 4: Skip duplicate values for the first element.
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue; // If the current element is the same as the previous, skip it.
        }

        // Step 5: Initialize two pointers, left and right.
        left = i + 1; // Start left pointer just after the current element.
        right = nums.length - 1; // Start right pointer at the end of the array.

        // Step 6: Use a while loop to find pairs that sum with nums[i] to zero.
        while (left < right) {
            // Step 7: Calculate the sum of the triplet.
            const currentSum = nums[i] + nums[left] + nums[right];

            // Step 8: Check if the sum equals zero.
            if (currentSum === 0) {
                // Found a valid triplet.
                threeSum.push([nums[i], nums[left], nums[right]]);
                
                // Step 9: Skip duplicate values for the second element.
                while (left < right && nums[left] === nums[left + 1]) left++;
                
                // Step 10: Skip duplicate values for the third element.
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Step 11: Move both pointers inward after finding a valid triplet.
                left++;
                right--;
            } 
            // Step 12: If the sum is greater than zero, move the right pointer left.
            else if (currentSum > 0) {
                right--;
            } 
            // Step 13: If the sum is less than zero, move the left pointer right.
            else {
                left++;
            }
        }
    }

    // Step 14: Return the array of unique triplets.
    return threeSum;
};