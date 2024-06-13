// Given an array nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// Input: [0,1,0,3,12] Output: [1,3,12,0,0]

// * You must do this in-place without making a copy of the array.
// * Minimize the total number of operations.

// plan

// 1. Set a pointer to the last element in the array.
// 2. Walk through each element of the array.
// 3. If the element is zero, swap its position with the element at the pointer,
//    then decrement the pointer.

function moveZeroes(nums) {
  // 1. Set a pointer to the last element in the array.
  let last = nums.length - 1;

  // 2. Walk through each element of the array.
  for (let i = 0; i < last; i++) {
    // 3. If the element is zero,
    if (nums[i] == 0) {
      // swap its position with the element at the pointer,
      [nums[i], nums[last]] = [nums[last], nums[i]];
      // then decrement the pointer.
      last--;
    }
  }
  return nums;
}
