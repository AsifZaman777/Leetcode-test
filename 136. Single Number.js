/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const sortedArr=nums.sort((a,b)=>a-b);
  
    for(var i=0; i<=sortedArr.length-1; i+=2)
    {
      if(sortedArr[i]!=sortedArr[i+1])
      {
          return sortedArr[i];
      }
    }
  
    return sortedArr[sortedArr-1];
  };
  