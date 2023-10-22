/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map={
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for(const item of s)
    {
      if(item==='(' || item==='{' || item==='[')
      {
          stack.push(item);
      }
      else if(!stack.length || map[stack.pop()] !==item)
      {
          return false;
      }
    }
   
   return !stack.length;

};