function accountsMerge(accounts) {
  const parent = new Map();
  const emailToName = new Map();

  const find = (x) => {
    if (parent.get(x) !== x) parent.set(x, find(parent.get(x)));
    return parent.get(x);
  };

  const union = (x, y) => parent.set(find(x), find(y));

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parent.has(email)) parent.set(email, email);
      emailToName.set(email, name);
      union(emails[0], email);
    }
  }

  const groups = new Map();
  for (const email of parent.keys()) {
    const root = find(email);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(email);
  }

  return [...groups.values()].map((emails) => [
    emailToName.get(find(emails[0])),
    ...emails.sort(),
  ]);
}

// Time: O(n * alpha(n)) — alpha is inverse Ackermann, effectively O(n)
// Space: O(n)
