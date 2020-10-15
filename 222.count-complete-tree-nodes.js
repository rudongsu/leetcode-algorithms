/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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

var countNodes = function(root) {
    if(root === null) return null;
    
    //////////////////////// recursion

    return 1+ countNodes(root.left) + countNodes(root.right);

    //////////////////////// iteration 
    // let queue = [root];
    // let count = 0;
    // while(queue.length){
    //     //let len = queue.length;
    //         let node = queue.shift();
    //         count++;
    //         if(node.left !== null){
    //             queue.push(node.left);
    //         }
    //         if(node.right !== null){
    //             queue.push(node.right);
    //         }
    // }
    //return count;
};


// @lc code=end

