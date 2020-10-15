/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let queue = [];

    if(root === null) return true;

    queue.push(root.left);
    queue.push(root.right);

    while(queue.length){

        let l = queue.shift();
        let r = queue.shift();

        if(l === null && r === null) continue;
        if(l === null || r === null) return false;
        if(l.val !== r.val) return false;

        queue.push(l.left);
        queue.push(r.right);
        queue.push(l.right);
        queue.push(r.left);
    }
    return true;
};


// @lc code=end

