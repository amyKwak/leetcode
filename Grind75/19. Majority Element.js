// Majority Element (easy)

const majorityElement = (nums) => {
  const map = {};

  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
    if (map[num] > nums.length / 2) return num;
  }
};

// Time Complexity: O(N)
// Space Complexity: O(N)
