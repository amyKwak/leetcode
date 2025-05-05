function subarraySum(nums, k) {
  let count = 0;
  let currentSum = 0;
  const sumOccurrences = new Map();
  sumOccurrences.set(0, 1); // Initialize with 0 sum for cases where a subarray itself equals k

  for (const num of nums) {
    currentSum += num;

    // Check if (currentSum - k) exists in the map
    if (sumOccurrences.has(currentSum - k)) {
      count += sumOccurrences.get(currentSum - k);
    }

    // Add or update currentSum in the map
    sumOccurrences.set(currentSum, (sumOccurrences.get(currentSum) || 0) + 1);
  }

  return count;
}
