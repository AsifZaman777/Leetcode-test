/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

   const romanToIntMap = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    };

    let answer = 0;
    let number = 0;
    let prev = 0;

    for (let j = s.length - 1; j >= 0;j--) {
        number = romanToIntMap[s[j]];

        if (number < prev) {
            answer -= number;
        } else {
            answer += number;
        }
        prev = number;
    }

    return answer;

};