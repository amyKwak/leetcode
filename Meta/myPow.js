function myPow(x, n) {
  if (n === 0) return 1; // Base case: x^0 = 1
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    let half = myPow(x, n / 2);
    return half * half; // If n is even
  } else {
    return x * myPow(x, n - 1); // If n is odd
  }
}

// Time complexity: O(log n)
// Space complexity: O(log n) (recursion stack)
