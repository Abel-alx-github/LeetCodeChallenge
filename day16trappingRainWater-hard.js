
/*
Day 16 leetcode challenge 
42. Trapping Rain Water
Hard

Given n non-negative integers representing an elevation map where the
width of each bar is 1, compute how much water it can trap after raining.


 * @param {number[]} height
 * @return {number}

var trap = function(height) {
    // here your solution
}

*/

var trap = function(height) {
    let trapRain = 0; // Initialize total trapped rainwater to zero
    let left = 0; // Pointer starting from the left end of the height array
    let right = height.length - 1; // Pointer starting from the right end of the height array
    let leftMax = 0; // Maximum height encountered from the left pointer
    let rightMax = 0; // Maximum height encountered from the right pointer

    // Loop until the left pointer meets the right pointer
    while (left < right) {
        // Compare heights at the left and right pointers
        if (height[left] <= height[right]) {
            // If the current height at left is greater than or equal to leftMax
            if (leftMax <= height[left]) {
                leftMax = height[left]; // Update leftMax to the new maximum height
            } else {
                // Calculate trapped water for the current position
                trapRain += leftMax - height[left]; // Water trapped is the difference between leftMax and the current height
            }
            left++; // Move the left pointer to the right
        } else {
            // If the current height at right is greater than leftMax
            if (rightMax <= height[right]) {
                rightMax = height[right]; // Update rightMax to the new maximum height
            } else {
                // Calculate trapped water for the current position
                trapRain += rightMax - height[right]; // Water trapped is the difference between rightMax and the current height
            }
            right--; // Move the right pointer to the left
        }
    }

    return trapRain; // Return the total amount of trapped rainwater

};