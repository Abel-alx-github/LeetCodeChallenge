// day 14 leetcode challenge
/*

134. Gas Station
Medium
There are n gas stations along a circular route, where the amount of gas
at the ith station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of gas to
travel from the ith station to its next (i + 1)th station. You begin the 
journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's 
index if you can travel around the circuit once in the clockwise direction, 
otherwise return -1. If there exists a solution, it is guaranteed to be unique.

*/

/**
 * @param {number[]} gas - Array containing the amount of gas at each gas station
 * @param {number[]} cost - Array containing the cost of gas to travel to the next station
 * @return {number} - Returns the starting gas station's index if a circuit can be completed, otherwise returns -1
 */
var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0; // Total gas available after traveling through all stations
    let currentTank = 0; // Gas at the current station while traveling
    let start = 0; // Potential starting index

    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i]; // Update the total gas available
        currentTank += gas[i] - cost[i]; // Update the gas at the current station

        if (currentTank < 0) { // If current tank becomes negative
            start = i + 1; // Update the potential starting index to the next station
            currentTank = 0; // Reset the current tank to 0
        }
    }

    // If total gas available is non-negative, return the potential starting index, else return -1
    return totalTank >= 0 ? start : -1;
};