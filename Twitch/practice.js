class MedianFinder {
  constructor() {
    this.low = new MaxHeap(); // smaller half
    this.high = new MinHeap(); // larger half
  }

  addNum(num) {
    // Step 1: push into low
    if (this.low.size() === 0 || num <= this.low.peek()) {
      this.low.push(num);
    } else {
      this.high.push(num);
    }

    // Step 2: rebalance
    if (this.low.size() > this.high.size() + 1) {
      this.high.push(this.low.pop());
    } else if (this.high.size() > this.low.size()) {
      this.low.push(this.high.pop());
    }
  }

  findMedian() {
    if (this.low.size() > this.high.size()) return this.low.peek();
    return (this.low.peek() + this.high.peek()) / 2;
  }
}

/* ---------- Simple binary-heap helpers ---------- */
class MinHeap {
  constructor() {
    this.arr = [];
  }
  size() {
    return this.arr.length;
  }
  peek() {
    return this.arr[0];
  }
  push(x) {
    const a = this.arr;
    a.push(x);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p] <= a[i]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop() {
    const a = this.arr;
    if (a.length === 1) return a.pop();
    const top = a[0];
    a[0] = a.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1,
        r = l + 1,
        smallest = i;
      if (l < a.length && a[l] < a[smallest]) smallest = l;
      if (r < a.length && a[r] < a[smallest]) smallest = r;
      if (smallest === i) break;
      [a[i], a[smallest]] = [a[smallest], a[i]];
      i = smallest;
    }
    return top;
  }
}

class MaxHeap {
  constructor() {
    this.arr = [];
  }
  size() {
    return this.arr.length;
  }
  peek() {
    return this.arr[0];
  }
  push(x) {
    const a = this.arr;
    a.push(x);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p] >= a[i]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop() {
    const a = this.arr;
    if (a.length === 1) return a.pop();
    const top = a[0];
    a[0] = a.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1,
        r = l + 1,
        largest = i;
      if (l < a.length && a[l] > a[largest]) largest = l;
      if (r < a.length && a[r] > a[largest]) largest = r;
      if (largest === i) break;
      [a[i], a[largest]] = [a[largest], a[i]];
      i = largest;
    }
    return top;
  }
}
