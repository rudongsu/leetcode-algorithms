/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if(nums.length === 3){
        return nums[0] * nums[1] * nums[2];
    }
    let max = Math.max(...nums);
    let max2 = - Infinity;
    nums.sort(
        (a, b) =>{
            return a-b;
        }
    )
    // for(let i=0; i<nums.length-2; i++){        
    //     for(let j=1; j<nums.length-1; j++){
    //         max2 = max2 > nums[i]*nums[j]? max2 : nums[i]*nums[j];
    //     }
    // }
    //return max * max2;

    let leftMaximum = nums[0] * nums[1];
    let rightMaximum = nums[nums.length-2] * nums[nums.length-3]

    return leftMaximum * max > rightMaximum * max ? leftMaximum * max : rightMaximum * max;
};
// @lc code=end

