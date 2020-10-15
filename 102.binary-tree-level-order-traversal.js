/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];

    let queue = [root];
    let res= [];
    while(queue.length){
        let len = queue.length;
        let sub = [];
        for(let i=0; i<len; i++){
            let node = queue.shift();
            sub.push(node.val) ;

            if(node.left !== null){
                queue.push(node.left)
            }
            if(node.right !== null){
                queue.push(node.right)
            }
        }
        res.push(sub);
    }
    return res;
    
};
// @lc code=end

