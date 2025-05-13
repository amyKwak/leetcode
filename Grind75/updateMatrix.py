def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
    rows, cols = len(mat), len(mat[0])
    queue = deque()
    dist = [[float('inf')] * cols for _ in range(rows)]

    for row in range(rows):
        for col in range(cols):
            if mat[row][col] == 0:
                dist[row][col] = 0
                queue.append((row, col))

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    while queue:
        row, col = queue.popleft()

        for dr, dc in directions:
            newRow, newCol = row + dr, col + dc

            if 0 <= newRow < rows and 0 <= newCol < cols:
                if dist[newRow][newCol] > dist[row][col] + 1:
                    dist[newRow][newCol] = dist[row][col] + 1
                    queue.append((newRow, newCol))

    return dist