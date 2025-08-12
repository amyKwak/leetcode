/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  // The robot must make (m−1) downs and (n−1) rights,
  // for a total of N = m+n−2 moves.  The number of distinct
  // sequences is “choose”:
  //    C(N, m−1)  (or equivalently C(N, n−1))
  const N = m + n - 2;
  const k = Math.min(m - 1, n - 1);
  let result = 1;
  // Compute the binomial coefficient iteratively:
  //   result = (N choose k)
  // = ( (N−k+1)/1 ) * ( (N−k+2)/2 ) * … * ( (N)/k )
  for (let i = 1; i <= k; i++) {
    result = (result * (N - k + i)) / i;
  }
  // result is always an integer, but we round to guard
  // against tiny floating-point errors.
  return Math.round(result);
}

// Examples
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 3)); // 6
