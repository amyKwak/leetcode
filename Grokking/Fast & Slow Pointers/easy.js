// LinkedList Cycle

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

//--------------------------------------------------------------------------------------------------------------------

// Similar Problem: Given the head of a LinkedList with a cycle, find the length of the cycle.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_length(head) {
  let slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return calculate_cycle_length(slow);
    }
  }
  return 0;
}

function calculate_cycle_length(slow) {
  let current = slow, cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length++;
    if (current === slow) {
      break;
  }
  return cycle_length;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

// -----------------------------------------------------------------------------------------------------------------------

// Middle of the LinkedList

// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList. If the total number of nodes in the LinkedList is even, return the second middle node.

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: 3

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_middle_of_linked_list(head) {
  let fast = head, slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

// Time Complexity: O(N)
// Space Complexity: O(1)


