// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// Example 1:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

//--------------------------------------------------------------------------------------

//1.) Optimal solution- Two Pointer approach

const removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];

const k = removeDuplicates(nums);

console.log("Output: ", k);
console.log("nums: ", nums);
console.log("nums:", nums.slice(0, k));

// Complexity:
// - Time: O(n) — one traversal.
// - Extra space: O(1) — modifies the input array directly.

//-----------------------------------------------------------------------------------------

// 2.) Brute Force Approach

const removeDuplicateBrute = function (nums) {
  const unique = [];

  for (let i = 0; i < nums.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
      if (nums[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(nums[i]);
    }
  }

  //copy unique array into original array
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  return unique.length;
};

const nums1 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 7];
const k1 = removeDuplicateBrute(nums1);

console.log(k1);
console.log(nums1.slice(0, k1));

// Complexity:
// - Time: O(n²) — each element may be compared against the unique values collected so far.
// - Extra space: O(n) — the unique array can store all elements if they are distinct.

//------------------------------------------------------------------------------------------

//3.) HashSet Approach

// Complexity:
// - Time: O(n) average — building the Set and writing unique values back.
// - Extra space: O(n) — the Set may store every element if all are distinct.
// A Set is more appropriate than a Map here because we only need to track whether a value exists, not associate it with another value.

const removeDuplicatesHashSet = function (nums) {
  const unique = new Set(nums);
  let i = 0;

  for (const value of unique) {
    nums[i] = value;
    i++;
  }

  return i;
};

const nums2 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
const k2 = removeDuplicatesHashSet(nums2);

console.log(k2);
console.log(nums2.slice(0, k2)); 



