function Node(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();

  this.head = new Node(0, 0); // MRU sentinel
  this.tail = new Node(0, 0); // LRU sentinel
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype._remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype._insertFront = function (node) {
  node.next = this.head.next;
  node.prev = this.head;
  this.head.next.prev = node;
  this.head.next = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const node = this.cache.get(key);
  this._remove(node);
  this._insertFront(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this._remove(this.cache.get(key));
  }

  const node = new Node(key, value);
  this.cache.set(key, node);
  this._insertFront(node);

  if (this.cache.size > this.capacity) {
    const lru = this.tail.prev;
    this._remove(lru);
    this.cache.delete(lru.key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
