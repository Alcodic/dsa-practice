// Pattern: Linear traversal (tracking max)
// Time: O(n)
// Space: O(1)

const x = function (arr) {
  // const arr = [1000, 5, 897785858, 45, 450, 32, 8, 908775];
  let i = 0;
  let largest = arr[i];

  for (i = 1; i < arr.length; i++) {
    if (largest < arr[i]) largest = arr[i];
  }
  return largest;
};

const arr1 = [1000, 5, 897785858, 45, 450, 32, 8, 908775];
const arr2 = [10, 20, 30, 40, 50, 60];
const arr3 = [-90, -80, 0, 10000, 876, -456, 7643];
const arr4 = [100000, 10000, 1000, 100, 10, 1];
const arr5 = [10, 2, 99, 3, 1];

const y = x(arr5);
console.log("the largest value in an array is: ", y);

//ChatGPT soln

const findLargest = function (arr) {
  if (arr.length === 0) return null; // edge case

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
};

// Test
console.log(findLargest([10, 2, 99, 3, 1]));

// 🧠 1. Approach (this is what interviewer cares about)
// 🔹 Brute Force Approach
// Sort the array
// Return last element
// arr.sort((a, b) => a - b);
// return arr[arr.length - 1];
// ❌ Problem:
// Sorting is unnecessary work
// You only need max, not full order
// 🔹 Optimal Approach (what you did)

// 👉 Linear Traversal + Tracking Variable

// Idea:
// Assume first element is largest
// Traverse array
// Update when you find bigger element
// Mental model:

// “Keep updating the best value seen so far”

// ⏱️ 2. Time Complexity
// Optimal Approach:
// You loop once through array

// 👉 O(n)

// Where:

// n = number of elements
// Brute Force:
// Sorting takes

// 👉 O(n log n)

// 🧠 Interview insight:

// If you say:

// “I can do this in O(n) without sorting”

// 👉 That’s a strong signal

// 🧠 3. Space Complexity
// Optimal Approach:

// You only use:

// one variable → largest

// 👉 O(1) (constant space)

// Brute Force:

// If sorting in-place:

// still O(1) extra space
// (but time is worse)
// 🧠 Summary (this is what you should say in interview)

// 👉 Approach:

// “I use linear traversal and keep track of the maximum element seen so far.”

// 👉 Time:

// “O(n) since we iterate once.”

// 👉 Space:

// “O(1) since no extra space is used.”

// 🔥 Important insight (don’t miss this)

// This problem is not about arrays.

// It’s about learning:

// 👉 Tracking variable pattern

// Which becomes:

// max
// min
// second max
// running sum
// profit

//TRy it yourself
// we can also do it using reduce() method and by using recursion
