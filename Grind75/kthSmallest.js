var kthSmallest = function (root, k) {
  const stack = [];
  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    if (--k === 0) return cur.val;
    cur = cur.right;
  }
  return undefined;
};

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
const root = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4)
);

console.log(kthSmallest(root, 1)); // 1
console.log(kthSmallest(root, 2)); // 2
console.log(kthSmallest(root, 3)); // 3
console.log(kthSmallest(root, 4)); // 4
console.log(kthSmallest(root, 1));
