/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const checkArr = [];
    
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) 
        {
            (j===0)||(j===i) ? row.push(1) : row.push(checkArr[i-1][j-1]+checkArr[i-1][j]);
        }
        checkArr.push(row);
    }

    return checkArr;
};

//check the 