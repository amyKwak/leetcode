const sum = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sum(nums.slice(1));
};

const count = (nums) => {
  if (nums.length === 0) return 0;

  return 1 + count(nums.slice(1));
};

const max = (nums) => {
  if (nums.length === 0) return 0;
  return Math.max(nums[0], max(nums.slice(1)));
};

const binarySearch = (nums, target) => {
  if (nums.length === 0) return -1;

  const mid = Math.floor((nums.length - 1) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return binarySearch(nums.slice(mid + 1), target);
  } else {
    return binarySearch(nums.slice(0, mid), target);
  }
};

console.log(binarySearch([1, 3, 5], 3));
