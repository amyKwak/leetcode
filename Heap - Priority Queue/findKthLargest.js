class MinHeap {
  constructor() {
    this.heap = [];
    // Space: O(k) — heap never exceeds k elements
  }

  size() {
    return this.heap.length;
  } // O(1)
  peek() {
    return this.heap[0];
  } // O(1)

  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
    // Time: O(log k) — bubbles up at most height of heap = log k levels
  }

  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return top;
    // Time: O(log k) — sinks down at most height of heap = log k levels
  }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
    // Time: O(log k) — traverses root-to-leaf path, height = log k
  }

  _sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === i) break;
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
    // Time: O(log k) — traverses root-to-leaf path, height = log k
  }
}

function findKthLargest(nums, k) {
  const heap = new MinHeap();

  for (const num of nums) {
    heap.push(num); // O(log k)
    if (heap.size() > k) heap.pop(); // O(log k)
  }

  return heap.peek(); // O(1)

  // Time:  O(n log k) — n elements, each push/pop costs O(log k)
  // Space: O(k)       — heap never exceeds k elements
}
