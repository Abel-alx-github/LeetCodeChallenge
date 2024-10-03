/*
My 7th LeetCode Challenge

🤔 Could you solve the problem in linear time and in O(1) space?

problem 
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
// here your solution 
}
*/


/**
 * @param {number[]} prices
 * @return {number}
 */

//======================================= Best solution 
// O(n) time complexity and O(1) space complexity
var maxProfit = function(prices) {
    let buyingPrice = prices[0]; // Initialize minPrice to a very high value
    let profit = 0; // Initialize maxProfit to zero

    for(let price of prices){ // Initialize maxProfit to zero
        if(buyingPrice > price){ // Update minPrice if the current price is lower
            buyingPrice = price;
        } else if(price - buyingPrice > profit) { // Calculate profit and update maxProfit if it's greater
            profit = price - buyingPrice; 
        }
    } 
    return profit; // Return the maximum profit found
}   



//======================================= My first solution
// O(n^2) time complexity and O(1) space complexity less efficient than the previous solution
 /*
    var maxProfit = function(prices) {
    let profit = 0;
    for(let i= 0; i < prices.length - 1; i++){
        for(let j = i+1; j < prices.length; j++) {
            if(prices[j] - prices[i] > profit) {
                profit = prices[j] - prices[i];
            }
        }
    }
    return profit
};
*/