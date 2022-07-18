// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

function find_string_anagrams(str, pattern) {
  result_indexes = [];

  let start = 0, matched = 0, map = {};

  // loop through the pattern and add each letter into the map with proper count
  for (i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!(char in map)) {
      map[char] = 0;
    }
    map[char]++;
  }

  for (i = 0; i < str.length; i++) {
    let rightChar = str[i];
    if (rightChar in map) {
      map[rightChar]--;
      if(map[rightChar] === 0) {
        matched++;;
      }
    }
    if (matched === Object.keys(map).length) {
      result_indexes.push(start)
    }
    if (i >= pattern.length - 1) {
      const leftChar = str[start];
      start++;
      if (leftChar in map) {
        if (map[leftChar] === 0) {
          matched--;
        }
        map[leftChar]++
      }
    }
  }

  // loop through the str
  // create a window with start and end
  // if matched === size of map then add the index to result index array


  return result_indexes;
};

// Time Complexity: O(M + N)
// Space Complexity: O(M) or O(N)