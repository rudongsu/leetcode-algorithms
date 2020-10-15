/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 */

// @lc code=start

  //Definition for a binary tree node.
//   function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//   }
 
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {

    /////////////////////////recursion

    if(t1 === null) return t2;
    if(t2 === null) return t1;

    t1.val += t2.val;

    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    
    return t1;

    ////////////////////////iteration
    
    // let stack = [t2];
    // while(stack.length){
    //     let node = stack.pop();
    //     t1.val += node.val;

    //     stack.push(node.right);
    //     stack.push(node.left);
    // }

};

// nfn

// @lc code=end

