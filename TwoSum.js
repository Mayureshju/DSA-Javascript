// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

Solution 1:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    for(let i=0; i<nums.length;i++){
       for(let j=i+1; j<nums.length;j++){
            if(nums[i] +nums[j] == target){
                arr.push(i);
                arr.push(j);
                return arr;
            }
       }
    }
    
};




solution 2:


var twoSum = function(nums, target) {
   var obj = {}
   for(let i=0;i<nums.length;i++){
let n = nums[i];
if(obj[target-n] >= 0){
return [obj[target-n],i]
}else{
    obj[n] = i;
}
   }
};
