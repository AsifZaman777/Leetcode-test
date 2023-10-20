/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var margedNumber=BigInt(0);

    for(let i=0; i<digits.length; i++)
    {
      margedNumber =BigInt(margedNumber*BigInt(10)+BigInt(digits[i]));
    }
    const margedNumberPlusOne=BigInt(margedNumber+BigInt(1));
    
    const margedNumberArray= Array.from(margedNumberPlusOne.toString()).map(Number);

    return margedNumberArray;
    
};

