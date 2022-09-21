// Implement Queue using Stacks (easy)

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

const MyQueue = () => {
  this.stack = [];
};

// push element x to the peek of the queue
MyQueue.prototype.push = function (x) {
  const newStack = [];
  while (this.stack.length > 0) {
    newStack.push(this.stack.pop());
  }
  newStack.push(x);
  while (newStack.length > 0) {
    this.stack.push(newStack.pop());
  }
};

// removes the element from in front of the queue and returns that element
MyQueue.prototype.pop = function () {
  return this.stack.length > 0 ? this.stack.pop() : undefined;
};

// get the front element
MyQueue.prototype.peek = function () {
  return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
};

// returns whether the queue is empty
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

// Time Complexity: O(1)
// Space Complexity: O(n)
