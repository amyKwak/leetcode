// Trie (Prefix Tree) Implementation in JavaScript

// Node structure for each character
class TrieNode {
  constructor() {
    this.children = {}; // map from character to TrieNode
    this.isEndOfWord = false; // flag to mark the end of a valid word
  }
}

// Trie data structure
export default class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEndOfWord = true;
  }

  /**
   * Returns true if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEndOfWord;
  }

  /**
   * Returns true if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}

// Time Complexity:
// Insert/Search/StartsWith – O(m), where m is the length of the word or prefix.
// Space Complexity: O(n * m) total nodes, for n words of average length m, in the worst case.
