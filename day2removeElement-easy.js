My 2nd LeetCode Challenge

 🤔 Can you come up with an algorithm that runs in O(n) time and O(1) space complexity?

Problem
/*
27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of
val in nums in-place. The order of the elements may be changed.
Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k,
to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the
elements which are not equal to val. The remaining elements of nums are 
not important as well as the size of nums.
Return k.


 * Removes all occurrences of a given value from an array in-place.
 *
 * @param {number[]} nums The input array.
 * @param {number} val The value to remove.
 * @returns {number} The number of elements in the array that are not equal to `val`.
 

var removeElement = function(nums, val) {
 // here your solution
}

*/

// =========================
// 🚀 Excited to share my solution to the LeetCode problem Remove Element.


//  javascript

// Solution: Two-Pointer Approach
var removeElement = function(nums, val) {
        let k = 0; // Initialize a counter to track the number of non-val elements

        // Iterate over the array
        for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val, 
        // move it to the correct position in the array
        if (nums[i] !== val) {
        nums[k] = nums[i];
        k++; // Increment the counter
        }
        }

        // Remove the remaining elements after the non-val elements
        nums.splice(k);

        // Return the number of non-val elements
        return k;
};

// =================================
// 💭 Explanation:

// 💭 Initialization:
// The k variable is initialized to 0. This variable will keep track of the index of the next available position in the array for non-val elements.

// 💭 Iteration:
// The for loop iterates over the array.
// For each element, it checks if the element is not equal to val.
// If the element is not equal to val:
// The element is copied to the kth position in the array.
// The k variable is incremented to point to the next available position.

// 💭 Removal:
// The splice() method is used to remove the remaining elements in the array after the non-val elements.
// Return:
// The k variable, which represents the number of non-val elements, is returned.

