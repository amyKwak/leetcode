function groupShiftedStrings(strings) {
  const normalize = (str) => {
    const n = str.length;
    if (n === 1) return "0"; // Single character strings are always their own group
    const shifts = [];
    for (let i = 1; i < n; i++) {
      const diff = (str.charCodeAt(i) - str.charCodeAt(i - 1) + 26) % 26;
      shifts.push(diff); // Store relative shifts
    }
    return shifts.join(","); // Join shifts as the normalized key
  };

  const map = new Map();

  for (const str of strings) {
    const key = normalize(str);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
}

// Time Complexity: O(N * M), where N is the number of strings and M is the length of the longest string
// Space Complexity: O(N * M)
