class FileSharing {
  constructor(m) {
    // m not needed directly; we create chunk structures lazily.
    this.freeIds = []; // min-heap of reusable IDs
    this.nextId = 1; // next fresh ID
    this.userToChunks = new Map(); // userID -> Set(chunkID)
    this.chunkToUsers = new Map(); // chunkID -> Sorted array of userIDs
  }

  // ----- Min-heap helpers for freeIds -----
  _heapPush(x) {
    const a = this.freeIds;
    a.push(x);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p] <= a[i]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  _heapPop() {
    const a = this.freeIds;
    if (a.length === 0) return undefined;
    const top = a[0];
    const last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      while (true) {
        let l = 2 * i + 1,
          r = 2 * i + 2,
          smallest = i;
        if (l < a.length && a[l] < a[smallest]) smallest = l;
        if (r < a.length && a[r] < a[smallest]) smallest = r;
        if (smallest === i) break;
        [a[i], a[smallest]] = [a[smallest], a[i]];
        i = smallest;
      }
    }
    return top;
  }

  join(ownedChunks) {
    const id = this.freeIds.length ? this._heapPop() : this.nextId++;
    const chunkSet = new Set();

    for (const c of ownedChunks) {
      chunkSet.add(c);
      if (!this.chunkToUsers.has(c)) this.chunkToUsers.set(c, []);
      const arr = this.chunkToUsers.get(c);
      // Insert id into sorted array arr
      let lo = 0,
        hi = arr.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] < id) lo = mid + 1;
        else hi = mid;
      }
      arr.splice(lo, 0, id);
    }
    this.userToChunks.set(id, chunkSet);
    return id;
  }

  leave(userID) {
    const chunks = this.userToChunks.get(userID);
    if (!chunks) return;
    for (const c of chunks) {
      const arr = this.chunkToUsers.get(c);
      if (arr) {
        // remove userID from sorted array
        let lo = 0,
          hi = arr.length - 1,
          idx = -1;
        while (lo <= hi) {
          const mid = (lo + hi) >> 1;
          if (arr[mid] === userID) {
            idx = mid;
            break;
          }
          if (arr[mid] < userID) lo = mid + 1;
          else hi = mid - 1;
        }
        if (idx !== -1) arr.splice(idx, 1);
        if (arr.length === 0) this.chunkToUsers.delete(c);
      }
    }
    this.userToChunks.delete(userID);
    this._heapPush(userID); // make ID reusable
  }

  request(userID, chunkID) {
    const arr = this.chunkToUsers.get(chunkID);
    if (!arr || arr.length === 0) return [];

    // Caller gains the chunk if not already owning it.
    if (!this.userToChunks.has(userID)) {
      this.userToChunks.set(userID, new Set());
    }
    const userChunks = this.userToChunks.get(userID);
    if (!userChunks.has(chunkID)) {
      userChunks.add(chunkID);
      // insert userID into sorted owner list
      // If user already in arr, skip.
      let lo = 0,
        hi = arr.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] < userID) lo = mid + 1;
        else hi = mid;
      }
      if (lo === arr.length || arr[lo] !== userID) arr.splice(lo, 0, userID);
    }
    return arr.slice(); // return a copy
  }
}
