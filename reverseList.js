function reverseList(head) {
  let prev = null;
  let cur = head;

  // prev
  // cur -> cur.next
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

// Time: O(n)
// Space: O(1)
