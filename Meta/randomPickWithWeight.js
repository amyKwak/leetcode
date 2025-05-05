var Solution = function (w) {
  this.prefixSums = [];
  let sum = 0;

  for (let weight of w) {
    sum += weight;
    this.prefixSums.push(sum);
  }

  this.totalSum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const target = Math.random() * this.totalSum;

  let left = 0;
  let right = this.prefixSums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target < this.prefixSums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
