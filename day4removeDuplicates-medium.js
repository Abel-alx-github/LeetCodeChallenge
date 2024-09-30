
/*

80. Remove Duplicates from Sorted Array II
Medium

Given an integer array nums sorted in non-decreasing order,
remove some duplicates in-place such that each unique element
appears at most twice. The relative order of the elements 
should be kept the same.

Since it is impossible to change the length of the array in some
languages, you must instead have the result be placed in the first
part of the array nums. More formally, if there are k elements after
removing the duplicates, then the first k elements of nums should hold
the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array.
You must do this by modifying the input array in-place with O(1) extra memory.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */


// Solution with for loop

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let k = 0; // Pointer for the position to insert the next valid element

    for (let i = 0; i < nums.length; i++) {
        // Check if the current number is different from the number two places before
        if (k < 2 || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i]; // Place the number at the k-th position
            k++; // Move the insert position forward
        }
    }

    return k; // Return the length of the modified array
}

// Time complexity: O(n)
// Space complexity: O(1)

/*
How It Works

Initial Check:
    The function first checks if the input array nums is empty. If it is, it returns 0,
    as there are no elements to process.

Pointer Initialization:
    A pointer k is initialized to 0. This pointer will track where to insert the next valid
    element in the modified array.

Iterate Through the Array:
    The function uses a for loop to iterate through each element of the array using index i.
    Inside the loop, it checks whether to insert the current element:
    If k is less than 2, it means we can always add the first two occurrences of any number.
    If not, it checks if the current number is different from the number two positions back
     (nums[k - 2]). This ensures that no number appears more than twice.

Insert Valid Elements:
    If the conditions are met, the current element is placed at the k index, and k is incremented.

Return New Length:
    After processing all elements, the function returns k, which represents the new length of the
    modified array.

*/






// Solution with while loop
var removeDuplicates = function(nums) {

    let k = 0; // pointer to  
    let i = 0;
    while (i < nums.length){
        if(k < 2 || nums[i] !== nums[k-2]) {
            nums[k] = nums[i];
            k++;
        }
        i++;
    }
    return k

}

// Another solution
var removeDuplicates = function(nums) {
    let k = 1;
    let i = 1;
    let j = 1;

    while(i < nums.length) {
        if (nums[i] !== nums[i-1]) {
            nums[k] = nums[i];
            j = 1;
            k++;
        } else if (nums[i] === nums[i-1] && j === 1) {
            nums[k] = nums[i];
            j=2;
            k++;
        }
        i++;
    }
    return k;
};