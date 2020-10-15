/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length;
    for(let i=0; i<k; i++){
        let val = nums[len-1];
        nums.pop();
        nums.unshift(val);
       
    }
    
    return nums;
};
// @lc code=end

