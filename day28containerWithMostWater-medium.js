/** My 28th leetcode challenge
 * 
 * 11. Container With Most Water
You are given an integer array height of length n.
There are n vertical lines drawn such that the two
endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container,
such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

var maxArea = function(height) {
    // here your solution
}

*/

// Function to calculate the maximum container area formed by the vertical lines
var maxArea = function(height) {
    let i = 0; // Pointer for the start of the array
    let j = width = height.length - 1; // Pointers for the end of the array and the width
    let maxWater = 0; // Variable to store the maximum water container area

    // Loop until the two pointers meet
    while(i < j){
        // Calculate the water container area at the current positions
        if(height[i] < height[j]){
            // Calculate the water container area at the current positions
            maxWater = height[i] * width > maxWater ? height[i] * width : maxWater;
            
            // Move the pointer i to the right
            i++;
        } else {
            // Calculate the water container area at the current positions
            maxWater = height[j] * width > maxWater ? height[j] * width : maxWater;
            
            // Move the pointer j to the left
            j--;
        }
      
        // Decrease the width
        width--; 
    }
    return maxWater; // Return the maximum water container area
};