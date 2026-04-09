class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowDuplicates = new Set()
        let colDuplicates = new Set();
    
        for(let i=0; i<board.length; i++){
            for(let j=0;j<board[i].length;j++){
                if(board[i][j] !== '.'){
                    if(rowDuplicates.has(board[i][j])){
                        return false
                    }
                    else {
                        rowDuplicates.add(board[i][j])
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

        const checkBoxes = (rowStart, colStart) => {
            let newSet = new Set();
            for(let i=rowStart ; i<rowStart+3 ; i++){
                for(let j=colStart ; j<colStart+3 ; j++){
                    if(board[i][j] !== '.'){
                        if(newSet.has(board[i][j])){
                            return false;
                        }
                        else newSet.add(board[i][j])
                    }
                }
            }
            return true
        }

        let num = 0;
        let row = 0;
        let col = 0;
        while(num<=8){
            const val = checkBoxes(row, col)
            if(!val){
                return false
            }
            if(col+4>9){
                if(row + 4 < 9){
                    row += 3;
                    col = 0
                }
                else break
            }
            else col += 3;
            num++;
        }
        return true;
    }
}
