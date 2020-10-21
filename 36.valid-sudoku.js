/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set;
    
    for(let i=0; i<9; i++){
        set = new Set();
        
        for(let j=0; j<9; j++){
            if(!set.has(board[i][j]) && board[i][j]!== '.'){
                set.add(board[i][j]);                
            }else if(board[i][j] === '.'){
                     
                     }
            else{
                return false;
            }
        }
    }
    
    for(let i=0; i<9; i++){
        set = new Set();
        for(let j=0; j<9; j++){
            
            if(!set.has(board[j][i]) && board[j][i]!== '.'){
                set.add(board[j][i]);                
            }else if(board[j][i] === '.'){
                     
                     }
            else{
                return false;
            }
        }
    }
    
    for(let i=0; i<9; i=i+3){
        
        let row = 0;
        set = new Set();
        for(let j=0; j<3; j++){

            if(!set.has(board[i][j]) ){
                set.add(board[i][j]);

            }else if(board[i][j] === '.'){
                
            }else{
                return false;
            }
                
            if(!set.has(board[i+1][j])){
                set.add(board[i+1][j]);

            }else if(board[i+1][j] === '.'){
                
            }else{
                return false;
            }
                
            if(!set.has(board[i+2][j])){
                     set.add(board[i+2][j]);
            }else if(board[i+2][j] === '.'){
                
            }else{
                return false;
            }
                
        }
        set = new Set();
        for(let j=3; j<6; j++){

            if(!set.has(board[i][j]) ){
                set.add(board[i][j]);

            }else if(board[i][j] === '.'){
                
            }else{
                return false;
            }
                
            if(!set.has(board[i+1][j])){
                set.add(board[i+1][j]);

            }else if(board[i+1][j] === '.'){
                
            }else{
                return false;
            }
                
            if(!set.has(board[i+2][j])){
                     set.add(board[i+2][j]);
            }else if(board[i+2][j] === '.'){
                
            }else{
                return false;
            }
                
        }
        set = new Set();
        for(let j=6; j<9; j++){

            if(!set.has(board[i][j]) ){
                set.add(board[i][j]);

            }else if(board[i][j] === '.'){
                
            }else{
                return false;
            }
                
            if(!set.has(board[i+1][j])){
                set.add(board[i+1][j]);

            }else if(board[i+1][j] === '.'){
                
            }else{
                return false;
            }
                
            if(!set.has(board[i+2][j])){
                     set.add(board[i+2][j]);
            }else if(board[i+2][j] === '.'){
                
            }else{
                return false;
            }
                
        }
    }
    
    return true;
};
// @lc code=end

