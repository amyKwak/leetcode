function ladderLength(beginWord, endWord, wordList) {
  const dict = new Set(wordList);
  if (!dict.has(endWord)) return 0;
  if (beginWord === endWord) return 1;

  let front = new Set([beginWord]);
  let back = new Set([endWord]);
  let steps = 1;
  const a = "a".charCodeAt(0);

  // Don't revisit words
  dict.delete(beginWord);
  dict.delete(endWord);

  while (front.size && back.size) {
    // expand the smaller frontier
    if (front.size > back.size) [front, back] = [back, front];

    const next = new Set();

    for (const word of front) {
      const chars = word.split("");
      for (let i = 0; i < chars.length; i++) {
        const orig = chars[i];
        for (let j = 0; j < 26; j++) {
          const ch = String.fromCharCode(a + j);
          if (ch === orig) continue;
          chars[i] = ch;
          const cand = chars.join("");
          if (back.has(cand)) return steps + 1; // meet in the middle
          if (dict.has(cand)) {
            next.add(cand);
            dict.delete(cand); // mark visited
          }
        }
        chars[i] = orig;
      }
    }

    front = next;
    steps++;
  }
  return 0; // no sequence
}
