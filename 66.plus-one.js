/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let len = digits.length;
    for(let i=len-1; i>=0; i--){
        if(digits[i] !== 9){
            digits[i] += 1;
            return digits;
        }
        
        digits[i] = 0;
        
    }
    
    digits.unshift(1);
    
    
    return digits;
};
// @lc code=end

