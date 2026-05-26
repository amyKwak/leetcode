function encode(strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
}

function decode(s) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") j++;

    const len = Number(s.slice(i, j));

    result.push(s.slice(j + 1, j + 1 + len));

    i = j + 1 + len;
  }

  return result;
}

// Time:  O(n) — encode and decode each visit every character once
// Space: O(n) — output string / array proportional to total input size
