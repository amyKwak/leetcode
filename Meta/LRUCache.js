class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // This will store the keys and their corresponding node in the linked list
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    // Move the accessed node to the front (most recently used)
    this.cache.delete(key);
    this.cache.set(key, value); // Re-insert to update the order in Map
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Remove the old value
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Remove the least recently used item (the first item in Map)
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
    // Insert the new key-value pair at the end
    this.cache.set(key, value);
  }
}

// Time complexity: O(1) for both get and put operations
// Space complexity: O(capacity) since the cache can store at most capacity + 1 items
