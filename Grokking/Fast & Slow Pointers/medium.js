// Start of a LinkedList Cycle

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_start(head) {
  cycle_length = 0;

  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      cycle_length = calculate_cycle_length(slow);
      break;
    }
  }
  return find_start(head, cycle_length);
}

function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length++;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}

function find_start(head, cycle_length) {
  let pointer1 = head,
    pointer2 = head;

  while (cycle_length > 0) {
    pointer2 = pointer2.next;
    cycle_length--;
  }

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

// --------------------------------------------------------------------------------------------------------------------

// Happy Number

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

// Input: 23
// Output: true (23 is a happy number)
// Explanations: Here are the steps to find out that 23 is a happy number:
//   1. 2^2 + 3^2 = 4 + 9 = 13
//   2. 1^2 + 3^2 = 1 + 9 = 10
//   3. 1^2 + 0^2 = 1 + 0 = 1

function find_happy_number(num) {
  let slow = num,
    fast = num;

  while (true) {
    slow = find_square_sum(slow); // move one step
    fast = find_square_sum(find_square_sum(fast)); // move two steps
    if (slow === fast) {
      // found the cycle
      break;
    }
  }
  return slow === 1;
}

function find_square_sum(num) {
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Time Complexity: O(logN)
// Space Complexity: O(1)

// Note: The time complexity of the algorithm is difficult to dtermine. All unhappy numbers eventually get stuck in the cycle meaning:
// 1. N1 < 81M
// 2. As we know M = log(N+1)
// 3. Therefore: N1 < 81M * log(N+1) => N1 = O(logN)
// This concludes that the above algorithm will have a time complexity of O(logN)
