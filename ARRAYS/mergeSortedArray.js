// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

//-------------------------------------------------------------------------------------------------------------

// 1. How many approaches are there?

// There are 3 commonly discussed approaches.

// Approach	Technique	Time complexity	Auxiliary space
// 1. Brute Force	Combine arrays + sort	\(O((m+n)\log(m+n))\)	\(O(m+n)\)
// 2. Two Pointers	Merge using two pointers into a temporary array	\(O(m+n)\)	\(O(m+n)\)
// 3. Three Pointers	Merge backwards inside nums1	\(O(m+n)\)	\(O(1)\)

// Note: Auxiliary space excludes the input arrays. The first two approaches require additional storage.

//--------------------------------------------------------------------------------------------------------

// 1) Brute force approach

// Core idea:

// Instead of directly merging two sorted arrays, we can:
// 1. Create a new temporary array.
// 2. Copy the first m elements of nums1 into it.
// 3. Copy all n elements of nums2 into it.
// 4. Sort the temporary array.
// 5. Copy the sorted elements back into nums1.
// This approach doesn't take advantage of the fact that both input arrays are already sorted. That's why it is called brute force.

//using built-in sort() fun

const merge = function (nums1, m, nums2, n) {
  let temp = [];

  for (let i = 0; i < m; i++) {
    temp.push(nums1[i]);
  }

  for (let j = 0; j < n; j++) {
    temp.push(nums2[j]);
  }

  temp.sort((a, b) => a - b);

  for (let k = 0; k < m + n; k++) {
    nums1[k] = temp[k];
  }
};

// using bubble sort instead of inbuilt sort() fun

const mergeSortedArrayBubble = function (nums1, m, nums2, n) {
  let temp = [];

  for (let i = 0; i < m; i++) {
    temp[i] = nums1[i];
  }

  for (let j = 0; j < n; j++) {
    temp[m + j] = nums2[j];
  }

  //Bubble sort

  //  Bubble Sort with Early-Exit Optimization
  // The idea is simple:

  // Introduce a Boolean variable swapped.
  // - Initially, set swapped = false.
  // - Whenever two elements are swapped, set swapped = true.
  // - After completing one pass, check swapped.
  // - If it is still false, the array is already sorted. Break out of the loop.

  for (let i = 0; i < temp.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < temp.length - 1 - i; j++) {
      if (temp[j] > temp[j + 1]) {
        let swap = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = swap;

        swapped = true;
      }
    }

    //If no swapping occurred, array is sorted
    if (swapped === false) {
      break;
    }
  }

  for (let k = 0; k < m + n; k++) {
    nums1[k] = temp[k];
  }
};

//time complexity

// Complexity Analysis
// Let \(N = m+n\).
// Operation	Complexity
// Copy both arrays	\(O(N)\)
// Bubble Sort	\(O(N^2)\)
// Copy back	\(O(N)\)

// Overall complexity
// Time Complexity
// O(N²)

// Auxiliary Space
// O(N)

// One important learning point
// There is a distinction between these two solutions:
// - Combine arrays + built-in sorting: \(O(N\log N)\)
// - Combine arrays + Bubble Sort: \(O(N^2)\)
// Both are brute-force approaches, but their sorting algorithms have different efficiencies.

//--------------------------------------------------------------------------------------------------------

// 2.) Two Pointer Approach

function mergeSortedArray(nums1, m, nums2, n) {
  let temp = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (nums1[i] > nums2[j]) {
      temp[k] = nums1[i];
      i++;
    } else {
      temp[k] = nums2[j];
      j++;
    }
    k++;
  }

  while (i < m) {
    temp[k] = nums1[i];
    i++;
    k++;
  }

  while (j < n) {
    temp[k] = nums2[j];
    i++;
    k++;
  }

  for (let x = 0; x < m + n; x++) {
    nums1[x] = temp[x];
  }


}

//  Complexity analysis
// Let N = m+n
// Complexity	            Value	                Reason
// Time	                   (O(m+n)	                Each element is visited and copied a constant number of times
// Auxiliary space	        O(m+n)	                Temporary array stores all merged elements

// Improved
//  This is significantly better than the brute-force Bubble Sort approach, which takes \(O((m+n)^2)\) time in the worst case.

//----------------------------------------------------------------------

// 3.) Three Pointers Approach (in-place merge (Backward traversal))


// - Time complexity: O(m+n)
// - Auxiliary space complexity: (O(1)
// - No temporary array.
// - No additional sorting.
// The key difference from our previous approach is that instead of merging from left to right into a temporary array, we'll merge directly into nums1, starting from the rightmost position.

function mergeSortedArrayThreePointer(nums1, m, nums2, n){

    let i = m-1;
    let j = n-1;
    let k = m+n-1;

    while(i>= 0 && j>= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
            
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while(j>=0){
        nums1[k]= nums2[j];
        j--;
        k--;
    }


}
