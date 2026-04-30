function encode(strs) {
  return strs.map((str) => `${str.length}#${str}`).join("");
}

function decode(s) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    const delim = s.indexOf("#", i);
    const len = parseInt(s.slice(i, delim));

    result.push(s.slice(delim + 1, delim + 1 + len));
    i = delim + 1 + len;
  }

  return result;
}

// Time: O(n)
// Space: O(n)
