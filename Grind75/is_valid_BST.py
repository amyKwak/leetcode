def is_valid_BST(root) -> bool:
    
    def helper(node, low, high):
        if not node:
            return True
        if not low < node.val < high:
            return False
        if not helper(node.left, low, node.val):
            return False
        if not helper(node.right, node.val, high):
            return False
        return True
    
    return helper(root, float('-inf'), float('inf'))
