// Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

function find_word_concatenation(str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  const map = {};

  words.forEach((word) => {
    if (!(word in map)) {
      map[word] = 0;
    }
    map[word]++;
  });

  const result = [],
    wordsCount = words.length,
    wordLength = words[0].length;

  for (i = 0; i < str.length - wordsCount * wordLength + 1; i++) {
    const wordsSeen = {};
    for (j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
      word = str.substring(next_word_index, next_word_index + wordLength);
      if (!(word in map)) {
        break;
      }

      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word]++;

      if (wordsSeen[word] > (map[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) {
        result.push(i);
      }
    }
  }
  return result;
}

// Time Complexity: O (N * M * Length)
// Space Complexity: O(M + N)
