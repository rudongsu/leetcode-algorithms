/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    /////////////////////////// Hashtable
    // let len = nums.length;
    // let cache = new Set();
    // let res = [];
    // for(let i=0; i<len; i++){
    //     if(cache.has(nums[i])){
    //         res.push(nums[i]);
    //     }
    //     else{
    //         cache.add(nums[i]);
    //     }
    // }

    let len = nums.length;
    let res = [];
    for(let i=0; i<len; i++){
        let num = Math.abs(nums[i]);
        if(nums[num -1]>0){
            nums[num-1] = -nums[num-1]; 
        }
        else{
            res.push(num);
        }        
    }

    return res;
};
// @lc code=end

