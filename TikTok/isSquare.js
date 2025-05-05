const distanceSquared = (p1, p2) => {
  return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
};

function isSquare(points) {
  const n = points.length;
  if (n < 4) return false;

  const distanceMap = new Map();

  // Step 1: Calculate all pairwise distances and store them in the map
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dist = distanceSquared(points[i], points[j]);
      if (!distanceMap.has(dist)) {
        distanceMap.set(dist, []);
      }
      distanceMap.get(dist).push([i, j]);
    }
  }

  // Step 2: Check each distance group for possible square formation
  for (const pairs of distanceMap.values()) {
    if (pairs.length < 4) continue;

    // Step 3: Use combinations of pairs to find squares
    const pairCount = pairs.length;
    for (let i = 0; i < pairCount; i++) {
      for (let j = i + 1; j < pairCount; j++) {
        const [a1, b1] = pairs[i];
        const [a2, b2] = pairs[j];

        const pointsSet = new Set([a1, b1, a2, b2]);
        if (pointsSet.size === 4) {
          const pointsArr = Array.from(pointsSet);
          const [p1, p2, p3, p4] = pointsArr.map((idx) => points[idx]);

          const d = [
            distanceSquared(p1, p2),
            distanceSquared(p1, p3),
            distanceSquared(p1, p4),
            distanceSquared(p2, p3),
            distanceSquared(p2, p4),
            distanceSquared(p3, p4),
          ].sort((a, b) => a - b);

          if (
            d[0] > 0 &&
            d[0] === d[1] &&
            d[1] === d[2] &&
            d[2] === d[3] &&
            d[4] === d[5] &&
            d[4] === 2 * d[0]
          ) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

// Example usage:
const points = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

console.log(isSquare(points)); // Output: true
