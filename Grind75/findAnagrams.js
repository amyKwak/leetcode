function findAnagrams(s, p) {
  if (p.length > s.length) return [];

  const result = [];
  const pCount = new Array(26).fill(0);
  const wCount = new Array(26).fill(0);
  const a = "a".charCodeAt(0);

  // Build frequency map for p and the first window
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - a]++;
    wCount[s.charCodeAt(i) - a]++;
  }

  // Track how many characters are currently "matched"
  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (pCount[i] === wCount[i]) matches++;
  }

  // Slide the window across s
  for (let i = p.length; i < s.length; i++) {
    if (matches === 26) result.push(i - p.length);

    const add = s.charCodeAt(i) - a; // incoming char
    const remove = s.charCodeAt(i - p.length) - a; // outgoing char

    // Update window for incoming character
    wCount[add]++;
    if (wCount[add] === pCount[add]) matches++;
    else if (wCount[add] === pCount[add] + 1) matches--;

    // Update window for outgoing character
    wCount[remove]--;
    if (wCount[remove] === pCount[remove]) matches++;
    else if (wCount[remove] === pCount[remove] - 1) matches--;
  }

  if (matches === 26) result.push(s.length - p.length);

  return result;
  // Time: O(n) — single pass through s, O(1) work per step
  // Space: O(1) — two fixed-size arrays of 26 (lowercase ASCII only)
}
