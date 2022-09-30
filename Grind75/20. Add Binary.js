// Add Binary (easy)

const addBinary = (a, b) => {
  const aBin = `0b${a}`,
    bBin = `0b${b}`,
    sum = BigInt(aBin) + BigInt(bBin);

  return sum.toString(2);
};
