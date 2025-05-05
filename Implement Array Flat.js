const flatArray = (arr, depth = 1) => {
  let result = [];

  const flatten = (subarray, currentDepth) => {
    if (currentDepth < depth) {
      subarray.forEach((item) => {
        if (Array.isArray(item)) {
          flatten(item, currentDepth + 1);
        } else {
          result.push(item);
        }
      });
    } else {
      result.push(...subarray);
    }
  };

  flatten(arr, 0);
  return result;
};

// Example usage
const nestedArray = [1, [2, [3, 4], [[5]]]];
console.log(flatArray(nestedArray, 2)); // [1, 2, 3, 4, [5]]

// Time complexity: O(N)
// Space complexity: O(N)
