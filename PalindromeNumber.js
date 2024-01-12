/**
 * @param {number} x
 * @return {boolean}
 */

// Given an integer x, return true if x is a  palindrome and false otherwise.

var isPalindrome = function(x) {
    if(x < 0){
       return false
    }
return x === +x.toString().split('').reverse().join('');
};
