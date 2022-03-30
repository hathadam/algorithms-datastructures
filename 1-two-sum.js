// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
/*
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

var twoSum = function(nums, target) {
  const hashMap = {};
  for( let i = 0; i < nums.length; i++ ) {
    if (hashMap[nums[i]] >= 0) return [hashMap[nums[i]], i]
    hashMap[target - nums[i]] = i  ;
  }
};

console.log(twoSum([3, 2, 4], 6)); // => Output: [1, 2]
console.log(twoSum([2, 7, 11, 15], 9)); // => Output: [0,1]
console.log(twoSum([3, 3], 6)); // => Output: [0, 1]

// approach 1: Brute Force
// the brute force approach us sunoke. Loop through eacg ekenebt x and find if there another value that equals to target - x
// time O(n^2); space O(1);

// approach 2: One-pass Hash Table
// While we are iterating and inserting elements into the hash table, we also look back to check if current element's completment already exists in the hash table. If exists, we have foubd a solution and return the indices immediately