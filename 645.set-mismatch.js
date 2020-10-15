/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicate;
    let missing;
    /////////////////////brute force : runtime 5% 
    // for (let index = 0; index < nums.length; index++) {
    //     const element = nums[index];
    //     for(let j=0; j < index; j++){
    //         if(nums[j]  === element){
    //             duplicate = element;
    //             break;
    //         }
    //     }
    //     for(let j=index+1; j < nums.length; j++){
    //         if(nums[j]  === element){
    //             duplicate = element;
    //             break;
    //         }
    //     }
    // }
    // for (let index = 1; index <= nums.length; index++) {
        
    //     if(!nums.includes(index)){
    //         missing = index;
    //     }
        
    // }

/////////////////////// sort,   runtime: 5%
    // let sortedArray = nums.sort(
    //     (a,b) => {
    //         return a-b;
    //     }
    // )
    // for (let index = 0; index < sortedArray.length; index++) {
    //     const element = sortedArray[index];
    //     if(element === sortedArray[index+1]){
    //         duplicate = element;
            
    //     }
    //     if(!sortedArray.includes(index+1)){
    //         missing = index+1;
    //     }
    // }

    ///////////////hashmap, runtime same??????
    let map = new Map();
    for(let i=0; i<nums.length;i++){
        if(map.has(nums[i]) ){
            duplicate = map.get(nums[i]);
            
        }
        map.set(nums[i], nums[i]);
        if(!nums.includes(i+1)){
            missing = i+1;
        }
    }


    
    return [duplicate,missing];
};
// @lc code=end

