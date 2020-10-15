/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [];
    
    let map = new Map();
    let val;
    for(let i=0; i<nums1.length; i++){
        if(!map.has(nums1[i])){
            map.set(nums1[i], 1);
        }else{
            map.set(nums1[i], map.get(nums1[i])+1);
        }        
    }
    
    for(let j=0; j<nums2.length; j++){
        if(map.has(nums2[j]) && map.get(nums2[j])>0){
            res.push(nums2[j]);
            map.set(nums2[j], map.get(nums2[j])-1);
        }
    }
    
    return res;
};
// @lc code=end

