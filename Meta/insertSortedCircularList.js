function insert(insertVal, node) {
  const newNode = new Node(insertVal);

  // If the list is empty, create a new single circular list
  if (!node) {
    newNode.next = newNode;
    return newNode;
  }

  let current = node;
  while (true) {
    const currentValue = current.value;
    const nextValue = current.next.value;

    // Case 1: Insert between current and next
    if (insertVal >= currentValue && insertVal <= nextValue) {
      break;
    }

    // Case 2: We're at the "end" of the sorted portion
    if (currentValue > nextValue) {
      // Check if we can insert at the end or the start
      if (insertVal >= currentValue || insertVal <= nextValue) {
        break;
      }
    }

    current = current.next;

    // Case 3: If we've traversed the entire list
    if (current === node) {
      break;
    }
  }

  // Insert the new node
  newNode.next = current.next;
  current.next = newNode;

  return node; // Return the original node
}
