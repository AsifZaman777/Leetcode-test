/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    var colNum=0;
    columnTitle=columnTitle.split('').reverse().join('').toString();
    for(var i=0;i<columnTitle.length;i++)
    {
      colNum += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, i);
    }
    return colNum;
};

