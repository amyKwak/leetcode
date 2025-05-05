var customSortString = function (order, s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }

  let result = [];

  for (let char of order) {
    if (map.has(char)) {
      result.push(char.repeat(map.get(char)));
      map.delete(char);
    }
  }

  for (const [char, freq] of map) {
    result.push(char.repeat(freq));
  }

  return result.join("");
};
