function carFleet(target, position, speed) {
  const cars = position
    .map((pos, i) => [pos, speed[i]])
    .sort((a, b) => b[0] - a[0]);

  let fleets = 0;
  let maxTime = 0;

  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;

    if (time > maxTime) {
      maxTime = time;
      fleets++;
    }
  }

  return fleets;
}

// Time complexity: O (n log n) - sort
// Space complexity: O(n)
