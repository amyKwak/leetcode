def kClosest(points: List[List[int]], k: int) -> List[List[int]]:
    return heapq.nsmallest(k, points, key=lambda point: point[0] ** 2 + point[1] ** 2)

# In Python, they use different strategies depending on k and n. Python may fall back to full sorting, which is O (n log n)
# You don't have control over this unless you build the heap yourself

# Absolute best time complexity: manual max-heap
def kClosest(points, k):
    max_heap = []

    for (x, y) in points:
        dist = -(x * x + y * y)  # negative distance to simulate max-heap
        heapq.heappush(max_heap, (dist, [x, y]))

        if len(max_heap) > k:
            heapq.heappop(max_heap)  # remove farthest point

    return [point for (_, point) in max_heap]