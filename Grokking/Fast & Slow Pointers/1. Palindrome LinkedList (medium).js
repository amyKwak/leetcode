// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)
// O(N)
//  time complexity where ‘N’ is the number of nodes in the LinkedList.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// SOLUTION

function is_palindrome_linked_list(head) {
  is (head === null || head.next === null) {
    return true;
  }

  // find middle of the LinkedList
  let slow = head, fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  headSecondHalf = reverse(slow); // reverse the second half
  // store the head of the reversed part to revert back later
  copyHeadSecondHalf = headSecondHalf;

  //compare the first and second half
  while (head !== null && headSecondHalf !== null) {
    if (head.value !== headSecondHalf.value) {
      break;
    }
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }
  reverse(copyHeadSecondHalf);

  if (head === null || headSecondHalf === null) { // if both halves match
    return true;
  }
  return false;
}

function reverse(head) {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// BRUTE FORCE SOLUTION

// const is_palindrome_linked_list = (head) => {
//   let values = [];

//   while (head) {
//     values.push(head.value);
//     head = head.next;
//   }

//   for (let i = 0; i < values.length; i++) {
//     if (values[i] !== values[values.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

// Time Complexity: O(N)
// Space Complexity: O(N)