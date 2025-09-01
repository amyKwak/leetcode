function minWindow(s, t) {
  if (t.length > s.length) return "";

  // ASCII is enough per problem (English letters). Use fixed arrays for speed.
  const need = new Array(128).fill(0);
  let needKinds = 0; // how many distinct chars still need satisfying

  for (let i = 0; i < t.length; i++) {
    const c = t.charCodeAt(i);
    if (need[c] === 0) needKinds++;
    need[c]++;
  }

  const have = new Array(128).fill(0);
  let formed = 0; // how many distinct chars currently satisfied
  let bestLen = Infinity,
    bestStart = 0;

  for (let l = 0, r = 0; r < s.length; r++) {
    const rc = s.charCodeAt(r);
    have[rc]++;

    if (need[rc] > 0 && have[rc] === need[rc]) formed++;

    // Try to shrink from the left while all requirements are met
    while (formed === needKinds) {
      const winLen = r - l + 1;
      if (winLen < bestLen) {
        bestLen = winLen;
        bestStart = l;
      }
      const lc = s.charCodeAt(l);
      if (need[lc] > 0 && have[lc] === need[lc]) formed--;
      have[lc]--;
      l++;
    }
  }

  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}
