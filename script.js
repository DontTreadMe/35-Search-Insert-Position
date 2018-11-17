/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target <= nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  if (target === nums[nums.length - 1]) return nums.length - 1;
  const subSearch = (nums, target, i, j) => {
    let mid = Math.floor((j + i) / 2);
//     console.log(mid);
    return target > nums[mid] && target <= nums[mid + 1] ? mid + 1 : 
    target > nums[mid] ? subSearch(nums, target, mid, j) : 
    target === nums[mid] ? mid : 
    subSearch(nums, target, i, mid);
  }
  return subSearch(nums, target, 0, nums.length - 1);
};
console.log('0-' + searchInsert([1,3,5,6], 0));
console.log('0-' + searchInsert([1,3,5,6], 1));
console.log('1-' + searchInsert([1,3,5,6], 2));
console.log('1-' + searchInsert([1,3,5,6], 3));
console.log('2-' + searchInsert([1,3,5,6], 4));
console.log('2-' + searchInsert([1,3,5,6], 5));
console.log('3-' + searchInsert([1,3,5,6], 6));
console.log('4-' + searchInsert([1,3,5,6], 7));
console.log('3-' + searchInsert([3,4,5,6,7,8], 6));
console.log('3-' + searchInsert([1,3,4,5,6,8,10], 5));
console.log('4-' + searchInsert([2,3,5,6,9], 7));
