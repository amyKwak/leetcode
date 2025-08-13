var serialize = function (root) {
  const out = [];
  (function dfs(node) {
    if (!node) {
      out.push("#");
      return;
    }
    out.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  })(root);
  return out.join(",");
};

var deserialize = function (data) {
  if (!data) return null;
  const tokens = data.split(",");
  let i = 0;

  function build() {
    const t = tokens[i++];
    if (t === "#") return null;
    const node = new TreeNode(Number(t));
    node.left = build();
    node.right = build();
    return node;
  }

  return build();
};
