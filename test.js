// let a = -1;

// if (a & 1) {
//     console.log('odd');
// } else {
//     console.log('even');
// }

// let b = 0;

// text = "  this   is  a sentence "
// console.log(text.split(' '));
// console.log(text.split(' ').filter(a => a.length !== 0));

// let len = text.length;
// let spaces = 0;
// let words = 0;
// if (len === 1) {
//     return text;
// }
// for (let i = 0; i < len; i++) {
//     if (text[i] === ' ') {
//         spaces++;
//     }
// }

// console.log(spaces);



// if (spaces & 1) {

// } else {

// }

// nums = [3, 2, 1];
// let max1, max2, max3;

// let set = new Set(nums);
// let nums_copy = Array.from(set);
// console.log(nums_copy);

// max1 = Math.max(...nums_copy);
// nums_copy = nums_copy.filter(a => a !== max1)

// console.log(nums_copy);

// max2 = Math.max(...nums_copy);
// nums_copy = nums_copy.filter(a => a !== max2)
// console.log(nums_copy);


// max3 = Math.max(...nums_copy);

// console.log(max3);



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


root = [1,2,3,4,5,6];

var countNodes = function(root) {
    if(root === null) return false;
    
    //////////////////////// recursion

    console.log(root);

    return 1+ countNodes(root.left) + countNodes(root.right);
};

let a = (5 + 2) / 2;

console.log('a:',a);

// console.log('/////////////////////////');
// let nums = [0,0,1,1,1,2,2,3,3,4];
// let len = nums.length;
// let i = 0;
// while(i<len-1){
//     if(nums[i] === nums[i+1]){
//         nums.splice(i,1);
//     }else{
//         i++;
//     }
//     len = nums.length;
// }

// console.log(nums);
    
let str = '';
let digits = [5,1,9,9,9,5,1,9,9,9,5,1,9,9,9,5,1,9,9,9,5,1,9,9,9,5,1,9,1,9];

