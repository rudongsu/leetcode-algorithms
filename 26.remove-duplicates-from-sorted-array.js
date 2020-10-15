/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    let i = 0;
    while(i<len-1){
        if(nums[i] === nums[i+1]){
            nums.splice(i,1);
        }else{
            i++;
        }
        len = nums.length;
    }
    
    return nums.length;
};
// @lc code=end

