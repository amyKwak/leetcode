from typing import List, Dict

def accountsMerge(accounts: List[List[str]]) -> List[List[str]]:
    """
    Merge accounts by connecting emails that appear in the same account.
    Returns a list where each element is [name, sorted_email_1, sorted_email_2, ...].
    """
    # Union-Find data structure for emails
    parent: Dict[str, str] = {}

    def find(x: str) -> str:
        # Path compression
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]

    def union(a: str, b: str) -> None:
        root_a = find(a)
        root_b = find(b)
        if root_a != root_b:
            parent[root_b] = root_a

    email_to_name: Dict[str, str] = {}

    # Step 1: Initialize parent pointers and union emails within each account
    for account in accounts:
        name = account[0]
        first_email = account[1]

        for email in account[1:]:
            # Initialize parent pointer if seeing this email for the first time
            if email not in parent:
                parent[email] = email
            # Record the name for this email
            email_to_name[email] = name
            # Union the first email in this account with the current one
            union(first_email, email)

    # Step 2: Group emails by their root parent
    groups: Dict[str, List[str]] = {}
    for email in parent:
        root = find(email)
        groups.setdefault(root, []).append(email)

    # Step 3: Build the merged account lists
    merged: List[List[str]] = []
    for root, emails in groups.items():
        # Sort the emails for this group
        emails.sort()
        # The name is the same for all emails in this group
        name = email_to_name[root]
        merged.append([name] + emails)

    return merged


# Time Complexity: O(n α(n) + n log n) ≈ O(n log n),
#   where n = total number of emails across all accounts,
#   α(n) is the inverse-Ackermann function from Union-Find (effectively constant),
#   and n log n comes from sorting each group of emails.
# Space Complexity: O(n),
#   for storing parent pointers, the email-to-name map, and the groups of emails.
