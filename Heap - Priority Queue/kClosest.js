class MaxHeap {
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

  push(point) {
    this.heap.push(point);
    this._bubbleUp(this.heap.length - 1);
    // Time: O(log k)
  }

  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return top;
    // Time: O(log k)
  }

  _dist(point) {
    return point[0] ** 2 + point[1] ** 2; // skip √, preserves order
  }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this._dist(this.heap[parent]) >= this._dist(this.heap[i])) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
    // Time: O(log k)
  }

  _sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (
        left < n &&
        this._dist(this.heap[left]) > this._dist(this.heap[largest])
      )
        largest = left;
      if (
        right < n &&
        this._dist(this.heap[right]) > this._dist(this.heap[largest])
      )
        largest = right;
      if (largest === i) break;
      [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
      i = largest;
    }
    // Time: O(log k)
  }
}

function kClosest(points, k) {
  const heap = new MaxHeap();

  for (const point of points) {
    heap.push(point); // O(log k)
    if (heap.size() > k) heap.pop(); // evict farthest, keep k closest
  }

  return heap.heap; // all k remaining points are the closest

  // Time:  O(n log k) — n points, each push/pop costs O(log k)
  // Space: O(k)       — heap never exceeds k elements
}
