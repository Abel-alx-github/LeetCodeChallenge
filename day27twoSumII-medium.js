/* My 27th Leetcode challenge

167. Two Sum II - Input Array Is Sorted
Given a 1-indexed array of integers numbers that is already sorted in
non-decreasing order, find two numbers such that they add up to a 
specific target number. Let these two numbers be numbers[index1] and
numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one
as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may
not use the same element twice.
Your solution must use only constant extra space.

 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}

var twoSum = function(numbers, target) {
    //here your solution
}
*/

var twoSum = function(numbers, target) {
    let i = 0; // Start index
    let j = numbers.length - 1; // End index

    // Continue until the two pointers meet
    while (i < j) {
        let sum = numbers[i] + numbers[j]; // Calculate current sum of the two pointers

        // Check if the current sum is equal to the target
        if (sum === target) {
            return [i + 1, j + 1]; // Return 1-based indices of the two numbers
        } 
        // If the sum is less than the target, move the left pointer to the right
        else if (sum < target && i + 1 < j) {
            i++;
        } 
        // If the sum is greater than the target, move the right pointer to the left
        else if (sum > target && j - 1 > i) {
            j--;
        }
    }
};