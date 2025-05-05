function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  // Step 1: Count frequencies of each element
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Step 2: Create an array of buckets, where index represents frequency
  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [num, freq] of frequencyMap) {
    buckets[freq].push(num);
  }

  // Step 3: Gather k most frequent elements from the buckets
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
}

// Time Complexity: O(N), where N is the number of elements in the input array nums.
// Space Complexity: O(N)
