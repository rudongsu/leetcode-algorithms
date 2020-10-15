/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let  sum = 0;

var findTilt = function(root) {
    helper(root);
    return sum;
};

var helper = (root) =>{
    if(root === null ) return 0;

    let l = helper(root.left);
    let r = helper(root.right);

    sum = sum + Math.abs(l-r);
    return l+r+root.val;
    
}

// @lc code=end

