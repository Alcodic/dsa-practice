// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

//---------------------------------------------------------------------------------

// Search Insert Position, there are 3 approaches worth knowing:
// Approach	            Technique	                                     Time Complexity
// 1	           Linear Search (Brute Force)	                               O(n)
// 2	           Binary Search – Iterative	                             O(log n)
// 3	           Binary Search – Recursive	                              O(log n)

//----------------------------------------------------------------------------------------

//1) Brute force

function searchInsertPosition(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target < nums[0]) {
      return 0;
    }

    if (nums[i] === target) {
      return i;
    }

    if (nums[i] < target && target < nums[i + 1]) {
      return i + 1;
    }

    if (nums[i] < target && target > nums[nums.length - 1]) {
      return nums.length;
    }
  }
}

const k = searchInsertPosition([1, 3, 5, 6], 5);
const k1 = searchInsertPosition([1, 3, 5, 6], 2);
const k2 = searchInsertPosition([1, 3, 5, 6], 7);
const k3 = searchInsertPosition([1, 3, 5, 6], 0);

console.log("Output1: ", k);
console.log("Output2: ", k1);
console.log("Output3: ", k2);
console.log("Output3: ", k3);

//Time Complexity : O(n);
//space Complexity: O(1);

//----------------------------------------------------------------------------------------------

// 2) Binary Search(Iterative)

function searchInsertPositionBinaryIterative(nums, target) {
  low = 0;
  high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

// Test cases
console.log(searchInsertPositionBinaryIterative([1, 3, 5, 6], 5));
console.log(searchInsertPositionBinaryIterative([1, 3, 5, 6], 2));
console.log(searchInsertPositionBinaryIterative([1, 3, 5, 6], 7));
console.log(searchInsertPositionBinaryIterative([1, 3, 5, 6], 0));

// Time complexity : O(log n);
//space complexity: O(1)

//--------------------------------------------------------------------------------------------------

// 3) Binary Search recursive

function searchInsertPositionBinaryRecursive(nums, target) {
  function BinarySearch(low, high) {
    //Base Case : Search space is empty
    if (low > high) {
      return low;
    }

    //Calculate middle Index
    const mid = low + Math.floor((high - low) / 2);

    //Target found
    if (nums[mid] === target) {
      return mid;
    }

    //Search right half
    if (nums[mid] < target) {
      return binarySearch(mid + 1, high);
    }

    //Search left half
    return binarySearch(low, mid - 1);
  }
  return binarySearch(0, nums.length - 1);
}

// Test cases
console.log(searchInsertPosition([1, 3, 5, 6], 5)); // 2
console.log(searchInsertPosition([1, 3, 5, 6], 2)); // 1
console.log(searchInsertPosition([1, 3, 5, 6], 7)); // 4
console.log(searchInsertPosition([1, 3, 5, 6], 0)); // 0

//Time Complexity : O(log n);
// Space Complexity : O(log n);
