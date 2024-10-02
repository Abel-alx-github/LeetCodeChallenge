/*
My 6th LeetCode Challenge

🤔 Could you solve the problem in linear time and in O(1) space?

problem 

189. Rotate Array

Given an integer array nums, rotate the array to the right by k steps,
where k is non-negative.

**
 * @param {number[]} nums

 * @param {number} k

 * @return {void} Do not return anything, modify nums in-place instead.
 
*/


// this the best ===========Solution 1

// Function to swap elements between two indices in the array

const swap = function (startIndex, lastIndex) {

    // Continue swapping until the two indices meet

    while (startIndex < lastIndex) {
      let temp = nums[startIndex]; // Store the current element at startIndex
      nums[startIndex] = nums[lastIndex]; // Swap with the element at lastIndex
      nums[lastIndex] = temp; // Place the stored element in lastIndex
      lastIndex--; // Move lastIndex towards the start
      startIndex++; // Move startIndex towards the end
    }
}
// Calculate the last index of the array
let len = nums.length - 1;

// Step 1: Reverse the entire array
swap(0, len);

// Step 2: Reverse the first k elements to position them correctly
swap(0, k - 1);

// Step 3: Reverse the remaining elements to complete the rotation
swap(k, len);

// O(n) time complexity and O(1) space 


/*
💭 How it works
swap: The function swaps elements between two indices in the nums array until the two indices meet.

Parameters:
startIndex: The starting index for swapping.
lastIndex: The ending index for swapping.

Process: It uses a while loop to continue swapping elements until the startIndex is no longer less than the lastIndex.
*/










/*
//================================================== solution 2
var rotate = function(nums, k) {
    let rotated = new Array(nums.length);
    
    for(let i =0; i < nums.length; i++) {
        rotated[(i + k) % nums.length] = nums[i]
    }
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i]
    }
}
*/



/* 
// ==================== ============================Solution 3

var rotate = function(nums, k) {
    let rotate = [];
    let len = nums.length - 1;
 
    for (let i = 0; i < k; i++) {
        rotate.unshift(nums[len-i])
        nums.pop()
    }

    nums.unshift(...rotate)

}
    */
