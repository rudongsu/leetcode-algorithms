/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let max1, max2, max3;

    let set = new Set(nums);
    let nums_copy = Array.from(set);

    if (nums_copy.length < 3) {
        return Math.max(...nums_copy);
    }

    max1 = Math.max(...nums_copy);
    nums_copy = nums_copy.filter(a => a !== max1)
    
    max2 = Math.max(...nums_copy);
    nums_copy = nums_copy.filter(a => a !== max2)

    max3 = Math.max(...nums_copy);

    return max3;
};
// @lc code=end

