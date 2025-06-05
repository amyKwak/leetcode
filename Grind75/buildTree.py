from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val: int = 0, left: Optional['TreeNode'] = None, right: Optional['TreeNode'] = None):
        self.val = val
        self.left = left
        self.right = right

def buildTree(preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    # Edge case: if either list is empty or lengths differ, no valid tree
    if not preorder or not inorder or len(preorder) != len(inorder):
        return None

    # Build a hashmap to quickly find the index of any value in inorder
    inorder_index: dict[int, int] = {value: idx for idx, value in enumerate(inorder)}

    # pre_index tracks the current root position in preorder
    pre_index = 0

    def helper(left: int, right: int) -> Optional[TreeNode]:
        """
        Recursively build the subtree whose inorder indices run from `left` to `right` (inclusive).
        `left` and `right` are indices in the inorder array.
        """
        nonlocal pre_index
        # If there is no subtree to build
        if left > right:
            return None

        # 1. Take the current root value from preorder, then advance pre_index
        root_val = preorder[pre_index]
        pre_index += 1

        # Create the root node
        root = TreeNode(root_val)

        # 2. Find the index of this root in inorder to split left/right subtrees
        idx = inorder_index[root_val]

        # 3. Build left subtree from inorder[left..idx-1]
        root.left = helper(left, idx - 1)

        # 4. Build right subtree from inorder[idx+1..right]
        root.right = helper(idx + 1, right)

        return root

    # Build the entire tree from inorder[0..len(inorder)-1]
    return helper(0, len(inorder) - 1)


# Time Complexity: O(n), where n = len(preorder) = len(inorder).
#   - We visit each node exactly once in the helper.
#   - Hashmap lookups for inorder splits are O(1) each.
#
# Space Complexity: O(n):
#   - The `inorder_index` hashmap uses O(n) space.
#   - The recursion stack can go up to O(n) in the worst (unbalanced) case.
 