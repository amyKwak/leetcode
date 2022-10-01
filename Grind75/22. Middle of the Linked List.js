// Middle of the Linked List (easy)

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

const middleNode = (head) => {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
