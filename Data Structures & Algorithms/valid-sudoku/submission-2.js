class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowDuplicates = new Set()
        let colDuplicates = new Set();
        let square = {};
    
        for(let i=0; i<board.length; i++){
            for(let j=0;j<board[i].length;j++){
                if(board[i][j] !== '.'){
                    if(rowDuplicates.has(board[i][j])){
                        return false
                    }
                    else {
                        rowDuplicates.add(board[i][j])
                    }
                    let sq = square[`${parseInt(i/3)},${parseInt(j/3)}`] || []
                    if(sq.indexOf(board[i][j]) >= 0){
                        return false
                    }
                    else {
                        const key = `${parseInt(i/3)},${parseInt(j/3)}`
                        if(Array.isArray(square[key])){
                            square[key].push(board[i][j])
                        }
                        else{
                            square = {...square, [key]: [board[i][j]]}
                        }
                    }
                }
                if(board[j][i] !== '.'){
                    if(colDuplicates.has(board[j][i])){
                        return false;
                    }
                    else{
                        colDuplicates.add(board[j][i])
                    }
                } 
                if(j === board[i].length - 1){
                    colDuplicates.clear()
                }
            }
            rowDuplicates.clear()
        }
        return true;
    }
}
