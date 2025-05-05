class Node {
  constructor(val, left = null, right = null, parent = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

const lowestCommonAncestor = (p, q) => {
  let pAncestors = new Set();

  // Traverse up the tree from node p, adding all ancestors to the set
  while (p !== null) {
    pAncestors.add(p);
    p = p.parent;
  }

  // Traverse up the tree from node q, checking if the current node is in p's ancestors
  while (q !== null) {
    if (pAncestors.has(q)) {
      return q; // The first common ancestor is the LCA
    }
    q = q.parent;
  }

  return null; // This line is just for safety, should never be reached
};
