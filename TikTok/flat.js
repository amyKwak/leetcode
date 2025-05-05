const arr = [1, [2], [3, [4]]];

const flat = (arr, n) => {
  if (n === 0) return arr;

  const result = [];

  for (const i = 0; i < arr.length, i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i], n - 1));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(flat(arr, 1));
