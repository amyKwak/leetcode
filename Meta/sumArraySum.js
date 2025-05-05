function subarraySum(nums, k) {
  let count = 0;
  let cumulativeSum = 0;
  let sumMap = { 0: 1 }; // To handle the case when a subarray starts from index 0

  for (let num of nums) {
    cumulativeSum += num;

    // Check if (cumulativeSum - k) exists in the map
    if (sumMap[cumulativeSum - k] !== undefined) {
      count += sumMap[cumulativeSum - k];
    }

    // Update the map with the current cumulative sum
    sumMap[cumulativeSum] = (sumMap[cumulativeSum] || 0) + 1;
  }

  return count;
}
