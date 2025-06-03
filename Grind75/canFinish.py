def canFinish(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    for dest, src in prerequisites:
        graph[src].append(dest)
    
    visited = [0] * numCourses # 0 = unvisited, 1 = visiting, 2 = visited

    def dfs(course):
        if visited[course] == 1:
            return False
        if visited[course] == 2:
            return True
        
        visited[course] = 1
        for neighbor in graph[course]:
            if not dfs(neighbor):
                return False
        visited[course] = 2
        return True
    
    for i in range(numCourses):
        if not dfs(i):
            return False
    
    return True