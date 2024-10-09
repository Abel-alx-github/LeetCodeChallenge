// my 13th leetcode challenge, medium level

/*
238. Product of Array Except Self
Medium

Hint
Given an integer array nums, return an array answer such that answer[i]
is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

var productExceptSelf = function(nums) {
    //here write code logic
}
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

// Get the length of the input array `nums`
const n = nums.length;

// Initialize an array `result` of the same length filled with 1s
const result = new Array(n).fill(1);

// Calculate the products of elements to the left of each element
let leftProduct = 1; // Start with a left product of 1 (no elements to the left)
for (let i = 0; i < n; i++) {
    // Multiply the current result with the accumulated left product
    result[i] *= leftProduct;
    // Update the left product to include the current element
    leftProduct *= nums[i];
}

// Calculate the products of elements to the right of each element and multiply
let rightProduct = 1; // Start with a right product of 1 (no elements to the right)
for (let i = n - 1; i >= 0; i--) {
    // Multiply the current result with the accumulated right product
    result[i] *= rightProduct;
    // Update the right product to include the current element
    rightProduct *= nums[i];
}

// Return the final result array containing the product of all elements except itself
return result;
}

// test
// console.log(productExceptSelf([1,2,3,4])); 