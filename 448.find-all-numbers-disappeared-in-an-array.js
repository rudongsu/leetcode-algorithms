/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = [];
    let visited = new Set();
    
    
    for(let i=0; i<nums.length; i++){
        visited.add(nums[i]);
    }

    for(let j=1; j<=nums.length; j++){
        if(!visited.has(j)){
            res.push(j);
        }
    }

    return res;
};

// @lc code=end

