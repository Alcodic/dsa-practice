// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

//-------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//1) brute force approach

function removeElement(nums, val) {
  let temp = [];

  // Step 1: Store elements that are not equal to val
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      temp.push(nums[i]);
    }
  }

  // Step 2: Copy valid elements back into nums
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  // Step 3: Return the number of valid elements
  return temp.length;
}

// Time Complexity: O(n)

// We traverse the original array once and then traverse the temporary array once.

// Therefore:
// \[
// O(n)+O(n)=O(2n)=O(n)
// \]

// Space Complexity: O(n)

// We create an additional array that can potentially store all n elements.

// Therefore, auxiliary space is O(n).

//---------------------------------------------------------------------------------

//2) Intermediate approach (in-place shifting)(worst)

function removeElement(nums, val) {
  let n = nums.length;
  let i = 0;

  while (i < n) {
    if (nums[i] === val) {
      // Shift all elements one position left
      for (let j = i; j < n - 1; j++) {
        nums[j] = nums[j + 1];
      }

      // Reduce effective array length
      n--;

      // Do not increment i here.
      // Check the same index again.
    } else {
      i++;
    }
  }

  return n;
}

//--------------------------------------------------------------------

// Time complexity: O(n²) worst case

// Consider an array where every element equals val.

// We repeatedly shift the remaining elements.

// The total number of shifts is approximately:
// \[
// (n-1)+(n-2)+\cdots+1
// \]

// \[
// =\frac{n(n-1)}{2}=O(n^2)
// \]

// Space complexity: O(1)

// We modify the original array and use only a few variables. No additional array is created.

//------------------------------------------------------------------------------------------

//3) Optimal Approach : Two Pointers

function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Time complexity: O(n)

// We traverse the array exactly once.

// Each iteration performs constant-time operations.

// Space complexity: O(1)

// We modify the original array and use only two pointer variables.

// No additional data structure is created.
