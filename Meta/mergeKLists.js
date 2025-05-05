class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (!lists || lists.length === 0) return null;

  // Min-heap comparator
  const minHeap = new MinHeap((a, b) => a.val - b.val);

  // Push the head of each linked list into the min-heap
  for (const list of lists) {
    if (list) minHeap.insert(list);
  }

  // Dummy node to simplify result construction
  const dummy = new ListNode();
  let current = dummy;

  // Extract the smallest element from the heap and add the next node from that list to the heap
  while (!minHeap.isEmpty()) {
    const smallest = minHeap.extract();
    current.next = smallest;
    current = current.next;

    if (smallest.next) {
      minHeap.insert(smallest.next);
    }
  }

  return dummy.next;
}

// Min-Heap Implementation
class MinHeap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extract() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.comparator(this.heap[index], this.heap[parentIndex]) >= 0) break;

      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < this.heap.length &&
        this.comparator(this.heap[leftChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}
