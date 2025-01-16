//leetcode challenge

//  48. Rotate Image
// Solved
// Medium
// Topics
// Companies
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]


function rotateImage(matrix){
    // first let's transpose : row to columns and viseverse

    for(let i = 0; i < matrix[0].length; i++){
        // j sholud depend on i value
        for(let j = i + 1; j < matrix.length;j++ ){
            // swap the value in place
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    // now we have transposed the matrix in place

    // let reverse each row of matrix

    for(let i = 0; i < matrix.length; i++){
        matrix[i].reverse();
    }

    // return the result
    return matrix
}