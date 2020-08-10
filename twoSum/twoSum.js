/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {

    let baseNum = 0;

    while (baseNum < nums.length) {
        let caseNum = baseNum + 1;
        for (let i = caseNum; i < nums.length; i++) {
            if (nums[baseNum] + nums[i] === target) {
                return [baseNum, i]
            }
        }
        baseNum++;
    }
};

console.log(twoSum([3, 2, 3], 6))