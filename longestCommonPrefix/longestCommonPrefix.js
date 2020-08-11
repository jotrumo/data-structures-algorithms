/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function(strs) {

  let result = "";
  let count = 0;

  if (strs.length === 0 || strs[0] === "") {
      return result;
  }

  if (strs.length === 1) {
      return strs[0];
  }

  while (count < strs[0].length) {
      for (let i = 0; i < strs.length; i++) {
          if (strs[i][count] !== strs[0][count]) {
              return result;
          }
      }
      result += strs[0][count];
      count ++;
  }
  return result;
};