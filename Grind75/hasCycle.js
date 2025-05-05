var hasCycle = function (head) {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

// time O(n)
// space O(1)
// linked list, two pointers
// 141. Linked List Cycle
