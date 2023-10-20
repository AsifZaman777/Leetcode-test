/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let currentElement=strs[0];
    let temp="";

    for(let i=1;i<strs.length;i++)
    {
        for(let j=0;j<currentElement.length;j++)
        {
          if(currentElement[j]==strs[i][j]) temp+=currentElement[j];
          else
          {
              break;
          }
           
        }
        currentElement= temp;
        temp=""

    }
    return currentElement;
};