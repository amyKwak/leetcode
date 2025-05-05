function isCompleteTree(root) {
  if (!root) return true;

  const queue = [root];
  let encounteredNull = false;

  while (queue.length > 0) {
    const node = queue.shift();

    if (!node) {
      encounteredNull = true;
    } else {
      if (encounteredNull) return false;

      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return true;
}
