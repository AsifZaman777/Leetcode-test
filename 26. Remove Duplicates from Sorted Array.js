/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j=0;
    for(var i=0; i<nums.length; i++)
    {
        if(nums[i]==nums[j]) continue;
        nums[++j]=nums[i];
    }
    return j+1;
};