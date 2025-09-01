/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();

  // Dummy head/tail to avoid null checks
  this.head = { prev: null, next: null, key: null, value: null };
  this.tail = { prev: null, next: null, key: null, value: null };
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype._addNodeToFront = function (node) {
  // Insert right after head
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype._removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype._moveToFront = function (node) {
  this._removeNode(node);
  this._addNodeToFront(node);
};

LRUCache.prototype._popTail = function () {
  // Remove least-recent (node before tail)
  var node = this.tail.prev;
  this._removeNode(node);
  this.map.delete(node.key);
  return node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  var node = this.map.get(key);
  this._moveToFront(node);
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    var node = this.map.get(key);
    node.value = value;
    this._moveToFront(node);
    return;
  }

  var newNode = { key: key, value: value, prev: null, next: null };
  this.map.set(key, newNode);
  this._addNodeToFront(newNode);

  if (this.map.size > this.capacity) {
    var lru = this._popTail();
    this.map.delete(lru.key);
  }
};
