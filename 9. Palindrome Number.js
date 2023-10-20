/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverse=0;
    var rem=0;
    var check=x;
    var isPal=true;

    while(x!=0 && x!=-1)
    {
      rem=x%10;
      reverse=reverse>=0 ? reverse=reverse*10+rem 
      : reverse=reverse*10-rem;
      x=Math.floor(x/10);
    }

    isPal= reverse==check ? true:false;
    return isPal; 

};