class Heap {
  constructor(compareFn) {
    this.data = [];
    this.compare = compareFn; // comparison decides min vs max
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data[0];
  }

  push(value) {
    this.data.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.data.pop();

    const root = this.data[0];
    this.data[0] = this.data.pop();
    this._heapifyDown();
    return root;
  }

  _heapifyUp() {
    let i = this.size() - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.compare(this.data[i], this.data[parent])) {
        [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
        i = parent;
      } else break;
    }
  }

  _heapifyDown() {
    let i = 0,
      n = this.size();
    while (true) {
      let left = 2 * i + 1,
        right = 2 * i + 2,
        target = i;

      if (left < n && this.compare(this.data[left], this.data[target])) {
        target = left;
      }
      if (right < n && this.compare(this.data[right], this.data[target])) {
        target = right;
      }
      if (target !== i) {
        [this.data[i], this.data[target]] = [this.data[target], this.data[i]];
        i = target;
      } else break;
    }
  }
}

// MaxHeap = compare child > parent
class MaxHeap extends Heap {
  constructor() {
    super((a, b) => a > b);
  }
}

// MinHeap = compare child < parent
class MinHeap extends Heap {
  constructor() {
    super((a, b) => a < b);
  }
}

class MedianFinder {
  constructor() {
    this.low = new MaxHeap(); // max-heap (lower half)
    this.high = new MinHeap(); // min-heap (upper half)
  }

  addNum(num) {
    // Step 1: push into max-heap first
    this.low.push(num);

    // Step 2: balance by moving top of low → high
    this.high.push(this.low.pop());

    // Step 3: maintain size property (low >= high)
    if (this.low.size() < this.high.size()) {
      this.low.push(this.high.pop());
    }
  }

  findMedian() {
    if (this.low.size() > this.high.size()) {
      return this.low.peek(); // odd total → root of maxHeap
    }
    return (this.low.peek() + this.high.peek()) / 2; // even total
  }
}
