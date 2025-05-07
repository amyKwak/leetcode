def clone_graph(node: 'Node') -> 'Node':
    if not node:
        return None
    
    visited = {}

    def dfs(current):
        if current in visited:
            return visited[current]
        
        clone = Node(current.val)
        visited[current] = clone
        
        for neighbor in current.neighbors:
            clone.neighbors.append(dfs(neighbor))
        
        return clone

    return dfs(node)