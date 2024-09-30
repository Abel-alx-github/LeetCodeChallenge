// i solved this 9/16/2024  meskerem 6 2017E.c.

/*
    # Easy type Leetcode question 88 merge sorted array in place with O(1) space O(n+m) time complexity
    @param: nums1[]
    @param: nums2[]
    @param: m 
    @param: n
*/

/*
My 1st LeetCode problem!!!!! 

 🤔 Can you come up with an algorithm that runs in O(m + n) time?

 88. Merge Sorted Array

problem

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
and  two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const merge = (nums1, n, nums2, m){
// here your solution
}

🚀 Excited to share my solution to the LeetCode problem "Merge Sorted Array"!

In this problem, we are tasked with merging two sorted integer arrays into one sorted array. The challenge is to do it in O(m + n) time complexity without using extra space.

Here's a concise breakdown of my approach:

Pointers: utilize pointers to keep track of the last elements of both arrays.
Comparison: compare the elements from the end of both arrays, placing the larger one in the correct position in nums1.
Remaining Elements: If any elements remain in nums2, directly copy them over to nums1.

``` javascript code

*/ 

        const merge = (nums1, n, nums2, m) => {
        // Early exit if nums2 is empty (m = 0)
        if (m === 0) return;

        // Pointer for the last index of the merged array in nums1
        let last_idx = n + m - 1;

        // Adjust the pointers for nums1 and nums2 to point to their last valid elements
        n -= 1; // Pointer for the last element in nums1
        m -= 1; // Pointer for the last element in nums2

        // Merge the arrays from the back to the front
        while (n >= 0 && m >= 0) {
        // Compare the elements from the end of both arrays
        if (nums1[n] > nums2[m]) {
        // Place the larger element at the last position of nums1
        nums1[last_idx] = nums1[n];
        n--; // Move the pointer in nums1 backward
        } else {
        nums1[last_idx] = nums2[m];
        m--; // Move the pointer in nums2 backward
        }
        last_idx--; // Move the last index backward
        }

        // If there are remaining elements in nums2, add them to nums1
        while (m >= 0) {
        nums1[last_idx] = nums2[m];
        m--; // Move the pointer in nums2 backward
        last_idx--; // Move the last index backward
        }

        // At this point, nums1 is merged and sorted in place
        // Time complexity is O(m + n) since we traverse both arrays once
        // Space complexity is O(1) as we use no extra space
        };

        // Example usage
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];
        merge(nums1, 3, nums2, 3);
        console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]