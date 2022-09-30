// Reverse Linked List (easy)

const reverseList = (head) => {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

// Time Complexity: O(N)
// Space Complexity: O(1)
