from typing import Optional, List
from collections import deque

class TreeNode:
    def __init__(self, val: int = 0, left: Optional['TreeNode'] = None, right: Optional['TreeNode'] = None):
        self.val = val
        self.left = left
        self.right = right

def rightSideView(root: Optional[TreeNode]) -> List[int]:
    """
    Return the values of the nodes visible from the right side of the binary tree,
    ordered from top (root) to bottom.
    """
    result: List[int] = []
    if not root:
        return result

    queue = deque([root])
    # Standard level-order traversal; at each level, record the last node we see.
    while queue:
        level_size = len(queue)
        for i in range(level_size):
            node = queue.popleft()
            # Enqueue left child first, then right child
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
            # If this is the last node in the current level, it’s visible from the right
            if i == level_size - 1:
                result.append(node.val)

    return result


# Time Complexity: O(n), where n = number of nodes (each node is visited exactly once).
# Space Complexity: O(w), where w = maximum width of the tree (worst-case O(n) for a full level).
