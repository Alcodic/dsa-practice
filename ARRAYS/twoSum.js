//***Complexity***

// This is the standard brute-force solution.

// Time complexity: O(n^2) — two nested loops, checking pairs.

// Auxiliary space complexity: \(O(1)\) — only a few variables are used. The returned pair is output space, not auxiliary working space.

// Your original comment saying space complexity is zero is close in spirit, but we conventionally write O(1), not zero.

//First Solution(I dont know it is optimized or brute force, I simply solve it whatever solution comes to my mind.)

function TwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

const result1 = TwoSum([1, 2, 90, 32, 20], 3);
const result2 = TwoSum([1, 2, 90, 32, 20], 91);
const result3 = TwoSum([1, 2, 90, 32, 20], 21);
const result4 = TwoSum([1, 2, 90, 32, 20], 34);
const result5 = TwoSum([1, 2, 90, 32, 20], 33);
const result6 = TwoSum([1, 2, 90, 32, 20], 52);

console.log(
  "Printing result: \n",
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
);

// Example: Two Sum
// We are currently in Arrays.
// - Brute force: nested loops, \(O(n^2)\).
// - Optimized: hash map, \(O(n)\).
// - What to learn now: what a hash map stores, how lookup works, and how to use JavaScript Map.
// - What can wait: deeper hashing theory, collision handling, hash functions, and advanced hashing problems.

//Optimized Solution: Hash Map

function twoSumOptimized(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
}

console.log("Printing hash value: ", twoSumOptimized([2, 7, 9, 0, 87, 45], 54));
