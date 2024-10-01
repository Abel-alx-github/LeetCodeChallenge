/**
 * 169. Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

 */

// Solution 1
var majorityElement = function(nums) {
    let candidate = null; // Holds the possible majority element
    let count = 0;        // Counts the occurrences of the candidate

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]; // Update candidate when count is 0
        }

        // Increment or decrement the count based on the current number
        count += (nums[i] === candidate) ? 1 : -1;

        // Early exit if we find a majority
        if (count > (nums.length / 2)) break;
    }

    return candidate; // The majority element
}


// sloution 2: with hasmap
// time O(n) and space O(n) since we use(copy to) new data set 'map'
var majorityElement = function(nums) {
    let map = new Map();
    let max = null;
    let count = 0;
    
    for(let num of nums) {
        let value = map.get(num)
        if(value) {
            map.set(num, value + 1)
            if (value+1 > count) {
                max = num;
                count = value+1;
            }
        } else {
            map.set(num, 1)
        }
    }
    return max
}


console.log(majorityElement([2,2,1,1,1,2,2])); // 2








