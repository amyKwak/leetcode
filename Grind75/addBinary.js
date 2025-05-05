var addBinary = function (a, b) {
  // Convert both binary strings to BigInt using "0b" prefix (binary notation),
  // add them, then convert the result back to a binary string using toString(2)
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};
