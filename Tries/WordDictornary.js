class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;

    // Time:  O(m) — m is word length
    // Space: O(m) — at most m new nodes
  }

  search(word) {
    function dfs(node, i) {
      if (i === word.length) return node.isEnd;

      const char = word[i];

      if (char === ".") {
        // try every child — return true if any path matches
        for (const child of Object.values(node.children)) {
          if (dfs(child, i + 1)) return true;
        }
        return false;
      } else {
        if (!node.children[char]) return false; // path broken
        return dfs(node.children[char], i + 1);
      }
    }

    return dfs(this.root, 0);

    // Time:  O(m)      — exact match, single path through trie
    //        O(26^m)   — worst case, all dots e.g. "....." fans out at every node
    // Space: O(m)      — call stack depth capped at word length
  }
}
