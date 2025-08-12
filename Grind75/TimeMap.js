class TimeMap {
  constructor() {
    this.store = new Map(); // key -> [{ timestamp, value }]
  }

  set(key, value, timestamp) {
    if (!this.store.has(key)) {
      this.store.set(key, []);
    }
    this.store.get(key).push({ timestamp, value });
  }

  get(key, timestamp) {
    if (!this.store.has(key)) return "";

    const entries = this.store.get(key);
    let left = 0,
      right = entries.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (entries[mid].timestamp <= timestamp) {
        result = entries[mid].value;
        left = mid + 1; // try to find a later one
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}
