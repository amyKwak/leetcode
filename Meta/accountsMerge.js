function accountsMerge(accounts) {
  const emailToName = new Map();
  const emailToId = new Map();
  let id = 0;

  // Union-Find Data Structure
  const parent = [];
  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]); // Path compression
    }
    return parent[x];
  };
  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootX] = rootY;
    }
  };

  // Assign unique IDs to each email and map emails to names
  for (const account of accounts) {
    const [name, ...emails] = account;
    for (const email of emails) {
      if (!emailToId.has(email)) {
        emailToId.set(email, id);
        parent[id] = id;
        id++;
      }
      emailToName.set(email, name);
      union(emailToId.get(emails[0]), emailToId.get(email)); // Union emails in the same account
    }
  }

  // Group emails by their root ID
  const groups = new Map();
  for (const email of emailToId.keys()) {
    const root = find(emailToId.get(email));
    if (!groups.has(root)) {
      groups.set(root, []);
    }
    groups.get(root).push(email);
  }

  // Format the result
  const result = [];
  for (const emails of groups.values()) {
    const name = emailToName.get(emails[0]);
    result.push([name, ...emails.sort()]);
  }

  return result;
}

// Time Complexity: O(AlogA), where A is the sum of the lengths of accounts[i].
// Space Complexity: O(A), the space used by our data structures.
