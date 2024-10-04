/*

You are given an integer array prices where prices[i] is the
price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock.
You can only hold at most one share of the stock at any time.
However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

var maxProfit = function(prices) {
    // your code here
};

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;  // Initialize profit to zero
    
    let buyingPrice = prices[0]; // assume buying on first day 

    // Loop through the prices array
    for(let price of prices) {
        // If the price is less than the buying price, update the buying price
        if(price < buyingPrice) {
            buyingPrice = price;
        }
        else {
            // If the price is greater than the buying price, update the profit
            profit += price - buyingPrice;
            // Update the buying price to the current price
            buyingPrice = price; 
        }
    }
    // Return the profit
    return profit
};

// Time complexity: O(n)
// Space complexity: O(1)
// how it works
/*
The algorithm works by iterating through the stock prices and checking
if today's price is higher than yesterday's. If it is, the profit from
that price increase is added to the total profit.
This captures all upward movements, allowing for multiple buy-sell transactions,
maximizing the total profit. The final profit is returned after checking all prices.

*/