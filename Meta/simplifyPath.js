function simplifyPath(path) {
  // Split the input path by '/' to handle each part
  const parts = path.split("/");
  const stack = [];

  for (const part of parts) {
    if (part === "" || part === ".") {
      // Ignore empty parts or current directory
      continue;
    } else if (part === "..") {
      // Go to parent directory (pop the stack if not empty)
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      // Valid directory name, push onto stack
      stack.push(part);
    }
  }

  // Join the stack to form the canonical path
  // Start with '/' and join remaining parts with '/'
  return "/" + stack.join("/");
}

// Time Complexity: O(n)
// Space Complexity: O(n)
