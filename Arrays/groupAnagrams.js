function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return [...map.values()];
}

// Time: O(n · k log k) — n strings, each sorted in k log k
// Space: O(n · k)       — map stores all n strings of length k
