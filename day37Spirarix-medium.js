
//  leetcode challenge 37th
// 54. Spiral Matrix
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an m x n matrix, return all elements of the matrix in spiral order.

 
function spiralMatrix(matrix){
    if(matrix.length == 0) return []

    const res = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1

    while(top <= bottom && left <= right){
        // loop from left to right and add to result then substract the top row
        for(let i = left; i <= right; i++){
            res.push(matrix[top][i])
        }
        top++;

        // loop top to bottom and add to result and substract the last(right) column for every row
        if(left <= right){
            for(let i=top; i <= bottom; i++){
                res.push(matrix[i][right])
            }
            right--;
        }

        // loop right to left from the bottom row and add to result and substruct the last row(bottom)
        if(top <= bottom){
            for(let i = right; i >= left; i--){
                res.push(matrix[bottom][i])
            }
            bottom--;
        }

        // loop bottom to top and add to result and substruct the first column(left) of every row
        if(left <= right){
            for(let i = bottom; i >= top; i--){
                res.push(matrix[i][left])
            }
            left++;
        }
    }

    return res
}