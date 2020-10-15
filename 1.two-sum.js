/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    ///////////////////////  hash map
    // let map = new Map();

    // for(let i=0; i<nums.length; i++){
    //     let val = nums[i];

    //     if(map.has(target - val)){
    //         let i1 = map.get(target - val);
    //         return [i1, i];
    //     }
    //     map.set(val, i);
    // }

    //////////////////////////  Brute force
    // for(let i=0; i<nums.length-1; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i] + nums[j] === target){
    //             return [i,j];
    //         }
    //     }
    // }
    // return [];

    ///////////////////////////// sort 
    let sortArray = [...nums].sort(
        (a, b) => {
            return a - b;
        }
    )

    let left = 0;
    let right = nums.length-1;

    while (left < right) {
        if(target<sortArray[left] + sortArray[right]){
            right --;
        }
        else if(target>sortArray[left] + sortArray[right]){
            left ++;
        }
        else if(target === sortArray[left] + sortArray[right]){
            break;
        }
    }
    let original_index1;
    let original_index2;
    let value1 = sortArray[left];
    let value2 = sortArray[right];

    for(let i=0; i<nums.length; i++){
        if( nums[i] === value1){
            original_index1 = i;
        }
        if( nums[i] === value2){
            original_index2 = i;
        }
    }

    return [original_index1, original_index2];

};
// @lc code=end
