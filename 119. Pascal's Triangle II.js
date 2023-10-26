/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const triangle= [];
  
    for(var i=0; i<=rowIndex;i++)
    {
        const row=[];
        for(var j=0;j<=i;j++)
        {
            (j===0 || j===i) ? row.push(1) : row.push(triangle[i-1][j-1]+triangle[i-1][j]);
        }
        triangle.push(row);
    }
    return triangle[rowIndex];
  };