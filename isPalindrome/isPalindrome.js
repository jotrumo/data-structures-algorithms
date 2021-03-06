/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/*
  @param {number} x
  @return {boolean}
 */

//try to avoid using strings...

var isPalindrome = function(x) {

 if(x < 0 || x % 10 === 0 && x !== 0) {
   return false;
 }

 let result = 0;
 let int = x;

 while (int > result) {
   result = int % 10 + result * 10;
   int = parseInt(int / 10);
 }

 return (result === int || int === parseInt(result/10))

};