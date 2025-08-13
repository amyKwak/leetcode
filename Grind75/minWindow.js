function minWindow(s, t) {
  if (t.length > s.length) return "";

  const need = new Int32Array(128); // counts needed for each char code
  let kinds = 0; // distinct chars still to satisfy

  // Fill need[] and count distinct kinds
  for (let i = 0; i < t.length; i++) {
    const c = t.charCodeAt(i);
    if (need[c] === 0) kinds++;
    need[c]++;
  }

  let have = 0;
  let bestStart = 0,
    bestLen = Infinity;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    const rc = s.charCodeAt(r);
    need[rc]--; // include s[r] in the window
    if (need[rc] === 0) have++; // just met this char's quota

    // shrink while all quotas are met
    while (have === kinds) {
      const winLen = r - l + 1;
      if (winLen < bestLen) {
        bestLen = winLen;
        bestStart = l;
      }
      const lc = s.charCodeAt(l++);
      need[lc]++; // remove s[l-1] from window
      if (need[lc] === 1) have--; // fell below quota for that char
    }
  }

  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}
