class MaxHeap {
  constructor() {
    // Internal array to store heap elements
    this.heap = [];
  }

  // Add a new element to the heap
  push(value) {
    this.heap.push(value); // Add at the end
    this._bubbleUp(this.heap.length - 1); // Move it up to maintain heap property
  }

  // Remove and return the largest element (root of the heap)
  pop() {
    const top = this.heap[0]; // The max element (root)
    const end = this.heap.pop(); // Remove the last element

    if (this.heap.length > 0) {
      this.heap[0] = end; // Move last element to root
      this._sinkDown(0); // Push it down to restore heap property
    }

    return top;
  }

  // Return the largest element without removing it
  peek() {
    return this.heap[0];
  }

  // Return current size of the heap
  size() {
    return this.heap.length;
  }

  // Move a node up until the max-heap property is restored
  _bubbleUp(index) {
    const element = this.heap[index];

    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIdx];

      if (element <= parent) break; // Stop if parent is already larger

      // Swap with parent and move up
      this.heap[index] = parent;
      index = parentIdx;
    }

    this.heap[index] = element;
  }

  // Move a node down until the max-heap property is restored
  _sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let swapIdx = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] > element) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        const shouldSwapRight =
          swapIdx === null
            ? this.heap[rightIdx] > element
            : this.heap[rightIdx] > this.heap[swapIdx];
        if (shouldSwapRight) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;

      // Swap with the larger child
      this.heap[index] = this.heap[swapIdx];
      index = swapIdx;
    }

    this.heap[index] = element;
  }
}
