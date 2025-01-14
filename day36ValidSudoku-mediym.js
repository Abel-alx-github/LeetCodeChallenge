
// 36. Valid Sudoku
// Solved
// Medium
// Topics
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need
//  to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain 
// the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 
function validSudoku(board) {
    let rRes = []; // store row value
    let cRes = []; // store columns value
    let subBox = []; // store 3*3 matrix

    // loop for rows
    for(let i = 0; i < board.length; i++){

        // loop for columns
        for(let j = 0; j < board[i].length; j++){
            let rValue = board[i][j]
            let cValue = board[j][i]
            let sbValue = board[3*Math.floor(i/3) + Math.floor(j/3)][3*(i%3) + (j%3)];

            if(rValue != '.' && rRes.includes(rValue)){
                return false
            }
            rRes.push(rValue);

            if(cValue != "." && cRes.includes(cValue)) {
                return false
            }
            cRes.push(cValue);

            if(sbValue != "." && subBox.includes(sbValue)){
                return false
            }
            subBox.push(sbValue)
        }

        rRes = []
        cRes = []
        subBox = []
    }
    return true
}

let board = [
                ["5","3",".",".","7",".",".",".","."],
                ["6",".",".","1","9","5",".",".","."],
                [".","9","8",".",".",".",".","6","."],
                ["8",".",".",".","6",".",".",".","3"],
                ["4",".",".","8",".","3",".",".","1"],
                ["7",".",".",".","2",".",".",".","6"],
                [".","6",".",".",".",".","2","8","."],
                [".",".",".","4","1","9",".","3","5"],
                [".",".",".",".","8",".",".","7","9"]
            ]

console.log(validSudoku(board))