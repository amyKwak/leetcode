class UnionFind {
  constructor() {
    this.parent = new Map();
  }

  find(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
    }
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x))); // path compression
    }
    return this.parent.get(x);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent.set(rootX, rootY);
    }
  }
}

function accountsMerge(accounts) {
  const uf = new UnionFind();
  const emailToName = new Map();

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      emailToName.set(email, name);
      uf.find(email); // initialize in union-find
    }

    for (let i = 1; i < emails.length; i++) {
      uf.union(emails[0], emails[i]);
    }
  }

  // Group emails by their root parent
  const rootToEmails = new Map();
  for (const email of emailToName.keys()) {
    const root = uf.find(email);
    if (!rootToEmails.has(root)) {
      rootToEmails.set(root, []);
    }
    rootToEmails.get(root).push(email);
  }

  // Format result
  const result = [];
  for (const [root, emails] of rootToEmails.entries()) {
    emails.sort();
    result.push([emailToName.get(root), ...emails]);
  }

  return result;
}
