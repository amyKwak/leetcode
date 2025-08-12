class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let ind = this.values.length - 1;
    let element = this.values[ind];

    while (ind > 0) {
      let parentInd = Math.floor((ind - 1) / 2);
      let parent = this.values[parentInd];

      if (element >= parent) break;

      this.values[ind] = parent;
      this.values[parentInd] = element;
      ind = parentInd;
    }
  }

  extractMin() {
    let min = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let ind = 0;
    let element = this.values[0];
    let length = this.values.length;

    while (true) {
      let leftChildInd = 2 * ind + 1;
      let rightChildInd = 2 * ind + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildInd < length) {
        leftChild = this.values[leftChildInd];

        if (leftChild < element) {
          swap = leftChildInd;
        }
      }

      if (rightChildInd < length) {
        rightChild = this.values[rightChildInd];

        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildInd;
        }
      }

      if (swap === null) break;

      this.values[ind] = this.values[swap];
      this.values[swap] = element;
      ind = swap;
    }
  }

  size() {
    return this.values.length;
  }

  peek() {
    return this.values[0];
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let ind = this.values.length - 1;
    let element = this.values[ind];

    while (ind > 0) {
      let parentInd = Math.floor((ind - 1) / 2);
      let parent = this.values[parentInd];

      if (element <= parent) break;

      this.values[ind] = parent;
      this.values[parentInd] = element;
      ind = parentInd;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let ind = 0;
    let element = this.values[0];
    let length = this.values.length;

    while (true) {
      let leftChildInd = 2 * ind + 1;
      let rightChildInd = 2 * ind + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildInd < length) {
        leftChild = this.values[leftChildInd];

        if (leftChild > element) {
          swap = leftChildInd;
        }
      }

      if (rightChildInd < length) {
        rightChild = this.values[rightChildInd];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildInd;
        }
      }

      if (swap === null) break;

      this.values[ind] = this.values[swap];
      this.values[swap] = element;
      ind = swap;
    }
  }

  size() {
    return this.values.length;
  }

  peek() {
    return this.values[0];
  }
}

var MedianFinder = function () {
  this.low = new MaxBinaryHeap();
  this.high = new MinBinaryHeap();
};

MedianFinder.prototype.addNum = function (val) {
  if (this.low.size() === 0 || val < this.low.peek()) {
    this.low.insert(val);
  } else {
    this.high.insert(val);
  }

  if (this.low.size() > this.high.size() + 1) {
    this.high.insert(this.low.extractMax());
  } else if (this.high.size() > this.low.size()) {
    this.low.insert(this.high.extractMin());
  }
};

MedianFinder.prototype.findMedian = function () {
  if (this.low.size() > this.high.size()) {
    return this.low.peek();
  } else {
    return (this.low.peek() + this.high.peek()) / 2;
  }
};
