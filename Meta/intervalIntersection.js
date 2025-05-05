function intervalIntersection(firstList, secondList) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < firstList.length && j < secondList.length) {
    // Get the start and end of the intersection between the current intervals
    const start = Math.max(firstList[i][0], secondList[j][0]);
    const end = Math.min(firstList[i][1], secondList[j][1]);

    // Check if they intersect
    if (start <= end) {
      result.push([start, end]);
    }

    // Move the pointer for the interval that ends first
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
