var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  let interval = 1;
  while (interval < lists.length) {
    for (let i = 0; i + interval < lists.length; i += interval * 2) {
      lists[i] = mergeTwo(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }
  return lists[0] || null;
};

function mergeTwo(a, b) {
  const dummy = new ListNode(0);
  let tail = dummy;

  while (a && b) {
    if (a.val <= b.val) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
  }
  tail.next = a || b;
  return dummy.next;
}
