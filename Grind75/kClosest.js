var kClosest = function (points, k) {
  // squared distance to avoid expensive sqrt
  const dist2 = ([x, y]) => x * x + y * y;

  // swap helper
  const swap = (i, j) => {
    [points[i], points[j]] = [points[j], points[i]];
  };

  // partition [l..r] around pivot at pIdx
  // returns final index of the pivot
  const partition = (l, r, pIdx) => {
    const pivotDist = dist2(points[pIdx]);
    swap(pIdx, r); // move pivot to end
    let store = l;
    for (let i = l; i < r; i++) {
      if (dist2(points[i]) < pivotDist) {
        swap(i, store++);
      }
    }
    swap(store, r); // move pivot to its final place
    return store;
  };

  // Quickselect: ensure that the first k points are the k smallest by dist
  const quickSelect = (l, r, k) => {
    if (l >= r) return;
    // choose a random pivot to avoid worst‑case O(n²)
    const pIdx = l + Math.floor(Math.random() * (r - l + 1));
    const pivotNewIdx = partition(l, r, pIdx);
    const leftCount = pivotNewIdx - l + 1;

    if (k < leftCount) {
      // kth lies in left partition
      quickSelect(l, pivotNewIdx - 1, k);
    } else if (k > leftCount) {
      // kth lies in right partition (adjust k to skip leftCount)
      quickSelect(pivotNewIdx + 1, r, k - leftCount);
    }
    // else pivot is exactly the kth, we're done
  };

  quickSelect(0, points.length - 1, k);
  return points.slice(0, k);
};
