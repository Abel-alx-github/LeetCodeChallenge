
/* My 30th Leetcode Challenge

209. Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target,
return the minimal length of a subarray whose sum is greater than or equal
to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

var minSubArrayLen = function(target, nums) {
 // here your solution
}

*/

var minSubArrayLen = function(target, nums) {
    // Step 1: Initialize the minimum length of the subarray to a value larger than any possible length.
    let lenSubArray = nums.length + 1; // Set to nums.length + 1 as an initial value to ensure any valid length is smaller.
    let sum = 0; // Variable to keep track of the current sum of the subarray.
    let left = 0; // The left pointer for the sliding window.

    // Step 2: Iterate through the array using forEach to access both the value (num) and index (idx).
    nums.forEach((num, idx) => {
        sum += num; // Add the current number to the sum.

        // Step 3: While the current sum is greater than or equal to the target,
        // it means we have a valid subarray that meets or exceeds the target.
        while (sum >= target) {
            // Step 4: Update the minimum length of the subarray found.
            lenSubArray = Math.min(lenSubArray, idx - left + 1);

            // Step 5: Remove the leftmost number from the sum to try to find a smaller valid subarray.
            sum -= nums[left]; // Subtract the number at the left pointer from the sum.
            left++; // Move the left pointer to the right.
        }
    });

    // Step 6: If lenSubArray was updated, return it; otherwise, return 0 if no valid subarray was found.
    return nums.length + 1 === lenSubArray ? 0 : lenSubArray;
};