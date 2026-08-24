class MinStack {
  constructor() {
    this.stack = [];    // stores actual values
    this.minStack = []; // tracks current minimum at each depth
  }

  push(val) {
    this.stack.push(val);
    const currentMin = this.minStack.length === 0
      ? val
      : Math.min(val, this.getMin());
    this.minStack.push(currentMin);

    // Time  O(1)
  }

  pop() {
    this.stack.pop();
    this.minStack.pop(); // keep stacks in sync

    // Time  O(1)
  }

  top() {
    return this.stack[this.stack.length - 1];

    // Time  O(1)
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];

    // Time  O(1)
  }

  // Space  O(n) — two stacks growing in parallel
}