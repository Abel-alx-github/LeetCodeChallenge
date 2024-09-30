
/*

My 3rd LeetCode Challenge



  🤔 Can you come up with an algorithm that runs in O(n) time and O(1) space complexity?



 Problem

 26. Remove Duplicates from Sorted Array

 Given an integer array nums sorted in non-decreasing order,
 remove the duplicates in-place such that each unique element
 appears only once. The relative order of the elements should
 be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted,
you need to do the following things:

Change the array nums such that the first k elements of nums contain the
unique elements in the order they were present in nums initially.
The remaining elements of nums are not important as well as the size of nums.

Return k.


 * @param {number[]} nums

 * @return {number}

function removeDuplicates(nums) {
   // here your solution
}

*/

// ==============================

// 🚀 Excited to share my solution to the LeetCode problem 26. Remove Duplicates from Sorted Array



// javascript



function removeDuplicates(nums) {

       // Return 0 if the input array is empty

       if (nums.length === 0) return 0;

       // Initialize a pointer for the position of unique elements

       let k = 1; 

       // Start iterating from the second element of the array

       let i = 1; 

       // Loop through the array until the end

       while (i < nums.length) {

               // Check if the current element is different from the previous one

               if (nums[i] !== nums[i - 1]) {

                    // If it's unique, place it at the k-th position

                    nums[k] = nums[i];
                   // Move the unique pointer forward
                   k++;
               }

              // Move to the next element
             i++;
       }
    // Return the count of unique elements
    return k; 
}



// ================================

// 💭 Problem Explanation



// Input: A sorted array of integers, nums.

// Output: The number of unique elements, k, with the first k elements of nums containing the unique elements.



// Steps to Solve



// 💭 Initialize a Pointer: Use a pointer to track the position of the last unique element.



// 💭 Iterate through the Array: Loop through the array and compare each element with the last unique element.



// 💭 Update the Array: If the current element is different from the last unique element, add it to the array and update the pointer.



// 💭 Return the Count: After the loop, the pointer will represent the count of unique elements.



// NB: On my second day of leetcode challenge I used splice method on array and that led my time complexity to O(n^2) along with the loop. But this time I avoided that mistake to acheive O(n).

// #DoHardThings #Alxse #Frontend #LeetcodeChallenge #Problem-Solving