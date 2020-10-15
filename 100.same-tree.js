/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

////////////////////////           DFS

    // if(!p && !q){
    //     return true;
    // }
    // if(!p || !q){
    //     return false;
    // }
    // if(p.val !== q.val){
    //     return false;
    // }

    // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

////////////////////////           BFS

    let queue1=[p];
    let queue2=[q];

    while(queue1.length && queue2.length){

        let pnode = queue1.shift();
        let qnode = queue2.shift();

        if(pnode === null && qnode === null) continue;
        if(pnode === null || qnode === null) return false;
        if(pnode.val !== qnode.val) return false;

        queue1.push(pnode.left);
        queue2.push(qnode.left);
        queue1.push(pnode.right);
        queue2.push(qnode.right);
    }

    return true;

};
// @lc code=end
