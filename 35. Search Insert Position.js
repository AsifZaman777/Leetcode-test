/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var indexNo=0;
    

    for(var i=0;i<nums.length;i++)
    {
      if(nums[i]==target)
      {
        indexNo=i;
      } 
      else if(target>nums[i] && target<nums[i+1])
      {
        indexNo=i+1;
      }
      else if(nums[nums.length-1]<target)
      {
        indexNo=nums.length;
      }
    }
    return indexNo;
};