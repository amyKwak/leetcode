function subsets(nums) {
  const res = [];
  const subset = [];

  function dfs(index) {
    // Once we’ve considered every element, record the current subset
    if (index === nums.length) {
      res.push([...subset]);
      return;
    }

    // 1) INCLUDE nums[index]
    subset.push(nums[index]);
    dfs(index + 1);

    // 2) EXCLUDE nums[index]
    subset.pop();
    dfs(index + 1);
  }

  dfs(0);
  return res;
}

// Example
console.log(subsets([1, 2, 3]));
// → [ [], [1],[2],[1,2],[3],[1,3],[2,3],[1,2,3] ] (order may vary)
