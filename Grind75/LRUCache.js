class LRUCache {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("capacity must be a positive integer");
    }
    this.capacity = capacity;
    this.map = new Map(); // key -> node

    // Dummy head/tail to avoid null checks
    this.head = { prev: null, next: null }; // most-recent end
    this.tail = { prev: null, next: null }; // least-recent end
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;
    this.#moveToFront(node);
    return node.value;
  }

  put(key, value) {
    let node = this.map.get(key);
    if (node) {
      node.value = value;
      this.#moveToFront(node);
      return;
    }

    node = { key, value, prev: null, next: null };
    this.map.set(key, node);
    this.#addAfterHead(node);

    if (this.map.size > this.capacity) {
      this.#evictLeastRecentlyUsed();
    }
  }

  // ---- private helpers ----
  #addAfterHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  #removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    // (optional) clean pointers:
    // node.prev = node.next = null;
  }

  #moveToFront(node) {
    this.#removeNode(node);
    this.#addAfterHead(node);
  }

  #evictLeastRecentlyUsed() {
    const lru = this.tail.prev;
    this.#removeNode(lru);
    this.map.delete(lru.key);
  }
}
