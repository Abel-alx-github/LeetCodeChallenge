
// day 15 leetcode challenge
/*

135. Candy
Level: Hard
Problem
There are n children standing in a line. Each child is assigned a rating
value given in the integer array ratings.
You are giving candies to these children subjected to the following requirements:
Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    // Get the number of children
    let len = ratings.length;

    // Step 1: Initialize an array to hold the candy distribution, giving each child 1 candy to start
    let candy = new Array(len).fill(1);

    // Step 2: Traverse the ratings from left to right
    // This loop ensures that if a child has a higher rating than the child before them,
    // they receive more candies than that child
    for (let i = 1; i < len; i++) {
        // Compare the current child's rating with the previous child's rating
        if (ratings[i - 1] < ratings[i]) {
            // If the current child's rating is higher, give them one more candy than the previous child
            candy[i] = candy[i - 1] + 1;
        }
    }

    // Step 3: Traverse the ratings from right to left
    // This loop ensures that if a child has a higher rating than the child after them,
    // they still receive more candies than that child
    for (let i = len - 2; i >= 0; i--) {
        // Check if the current child's rating is higher than the next child's rating
        // Also ensure that the current child has not already received enough candies
        if (ratings[i + 1] < ratings[i] && candy[i + 1] >= candy[i]) {
            // If true, give the current child one more candy than the next child
            candy[i] = candy[i + 1] + 1;
        }
    }

    // Step 4: Calculate the total number of candies needed
    // Use reduce to sum up all the candies in the array
    return candy.reduce((acc, cur) => acc + cur, 0);
};