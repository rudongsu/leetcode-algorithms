/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if(root ===null) return root; // 遍历到null节点时，不用翻转，直接返回它本身

    ///////////////////////////recursion

    // let cache = root.left;
    // root.left = root.right;
    // root.right = cache;

    // invertTree(root.left);
    // invertTree(root.right);

    //////////////////////////iteration
    
    let queue = [root];

    while(queue.length){
            let node = queue.shift();
            let cache = node.left;
            node.left = node.right;
            node.right = cache;
            
            if(node.left !== null){
                queue.push(node.left);
            }
            
            if(node.right !== null){
                queue.push(node.right);
            }
    }

    return root;

};

// if(root === null) return ;
// if(root.left === null || root.right === null) return;
// let cache;
// cache = root.left.val;
// root.left.val = root.right.val;
// root.right.val = cache;

// return invertTree(root.left) && invertTree(root.right);
// @lc code=end

