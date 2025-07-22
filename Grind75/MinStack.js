// MinStack Implementation in JavaScript
// Supports push, pop, top, and retrieving the minimum in O(1) time.

export default class MinStack {
  constructor() {
    this.stack = []; // main stack to hold values
    this.minStack = []; // parallel stack to hold current minimums
  }

  /**
   * Pushes a value onto the stack.
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    // If minStack is empty or val is new minimum, push val;
    // otherwise, duplicate the current min to keep stacks aligned
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    } else {
      this.minStack.push(this.getMin());
    }
  }

  /**
   * Removes the top element from the stack.
   * @return {void}
   */
  pop() {
    if (this.stack.length === 0) return;
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * Gets the top element.
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * Retrieves the minimum element in the stack.
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// All operations — push, pop, top, getMin — run in O(1) time and O(n) extra space.
