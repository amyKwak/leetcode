function copyRandomList(head) {
  if (!head) return null;

  // Step 1: Copy nodes
  let current = head;
  while (current) {
    const newNode = new Node(current.val);
    newNode.next = current.next; // Link to the next node
    current.next = newNode; // Link original node to new node
    current = newNode.next; // Move to the next original node
  }

  // Step 2: Copy random pointers
  current = head;
  while (current) {
    if (current.random) {
      current.next.random = current.random.next; // Set the random pointer
    }
    current = current.next.next; // Move to the next original node
  }

  // Step 3: Separate the lists
  current = head;
  const newHead = head.next; // The head of the copied list
  let copyCurrent = newHead;

  while (copyCurrent.next) {
    current.next = current.next.next; // Restore the original list's next pointers
    copyCurrent.next = copyCurrent.next.next; // Move to the next original node
    current = current.next; // Move to the next copied node
    copyCurrent = copyCurrent.next; // Move to the next copied node
  }
  current.next = null;

  return newHead; // Return the head of the copied list
}
