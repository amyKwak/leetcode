const kClosest = function (points, k) {
  return points
    .sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2))
    .slice(0, k);
};
// Time complexity: O(n log n) due to sorting
// Space complexity: O(n) for the output array

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(point) {
    this.heap.push(point);
    this.bubbleUp();
  }

  pop() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx][0] >= this.heap[idx][0]) break;
      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftIdx < length && this.heap[leftIdx][0] > this.heap[idx][0]) {
        swapIdx = leftIdx;
      }
      if (
        rightIdx < length &&
        this.heap[rightIdx][0] >
          (this.heap[swapIdx] ? this.heap[swapIdx][0] : this.heap[idx][0])
      ) {
        swapIdx = rightIdx;
      }
      if (swapIdx === null) break;
      [this.heap[idx], this.heap[swapIdx]] = [
        this.heap[swapIdx],
        this.heap[idx],
      ];
      idx = swapIdx;
    }
  }
}

function kClosest(points, k) {
  const maxHeap = new MaxHeap();
  for (const point of points) {
    const dist = point[0] ** 2 + point[1] ** 2;
    if (maxHeap.heap.length < k) {
      maxHeap.push([dist, point]);
    } else if (dist < maxHeap.heap[0][0]) {
      maxHeap.pop();
      maxHeap.push([dist, point]);
    }
  }
  return maxHeap.heap.map(([_, point]) => point);
}
