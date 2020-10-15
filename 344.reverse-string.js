/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let len = s.length;

    let left = 0;
    let right = len-1;

    while(left < right){
        let swap = s[left];
        s[left] = s[right];
        s[right] = swap;
        left ++;
        right --;
    }

    return s;
};
// @lc code=end

