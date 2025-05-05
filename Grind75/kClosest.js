var kClosest = function (points, k) {
  return points
    .sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2))
    .slice(0, k);
};

// Time complexity: O(NlogN);
// Space complexity O(N)

// Optimal solution uses Max-Heap
function kClosest(points, k) {
  const heap = new MaxHeap();

  for (let point of points) {
    heap.push(point);
    if (heap.size() > k) {
      heap.pop(); // remove farthest
    }
  }

  return heap.heap;
}
