def isValidBST(root) -> bool:
    
    def helper(node, low, high):
        if not node:
            return True
        
        if root.val <= low or root.val >= high:
            return False
        
        return helper(node.left, low, node.val) and helper(node.right, node.val, high)
    
    return helper(root, float('-inf'), float('inf'))
