/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    let len = nums.length;
    
    for(let i=0; i<len; i++){
        if(set.has(nums[i])){
            return true;    
        }
        set.add(nums[i]);
    }
    
    return false;
};
// @lc code=end

