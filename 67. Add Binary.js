/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    const binAdd= BigInt(parseInt(a,2)) + BigInt(parseInt(b,2));
    return binAdd.toString(2);
};
