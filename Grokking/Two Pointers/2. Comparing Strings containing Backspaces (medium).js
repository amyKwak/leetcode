// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

// Input: str1="xy#z", str2="xzz#"
// Output: true
// Explanation: After applying backspaces the strings become "xz" and "xz" respectively.

function backspace_compare(str1, str2) {
  let index1 = str1.length - 1,
    index2 = str2.length - 1;
  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_index(str1, index1),
      i2 = get_next_valid_index(str2, index2);
    if (i1 < 0 && i2 < 0) {
      return true;
    }
    if (i1 < 0 || i2 < 0) {
      return false;
    }
    if (str1[i1] !== str2[i2]) {
      return false;
    }
    index1 = i1 - 1;
    index2 = i2 - 1;
  }
  return true;
}

function get_next_valid_index(str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === "#") {
      backspaceCount++;
    } else if (backspaceCount > 0) {
      backspaceCount--;
    } else {
      return index;
    }
    index--;
  }
}

// Time Complexity: O(M + N) where M and N are the lengths of the two strings respectively
// Space Complexity: O(1)
