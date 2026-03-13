// Debounce: run `fn` only after `delay` ms have passed
// since the *last* call.
function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    const context = this;

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// Throttle: run `fn` at most once every `delay` ms.
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    const context = this;

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(context, args);
    }
  };
}

// --- Debounce ---
// Calls `fn` after there has been no call for `wait` ms.
// Options:
//  - leading:  call at the start of a burst
//  - trailing: call at the end of a burst (default true)
function debounce(fn, wait, { leading = false, trailing = true } = {}) {
  let timer = null;
  let lastArgs, lastThis;
  let result;

  function invoke() {
    const r = fn.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
    return r;
  }

  function startTimer() {
    timer = setTimeout(() => {
      timer = null;
      if (trailing && lastArgs) result = invoke();
    }, wait);
  }

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;

    const callNow = leading && !timer; // first call in a burst
    clearTimeout(timer);
    startTimer();

    if (callNow) result = invoke();
    return result; // return last result (common debounce convention)
  }

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = lastArgs = lastThis = null;
  };

  debounced.flush = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      if (trailing && lastArgs) result = invoke();
    }
    return result;
  };

  return debounced;
}

// --- Throttle ---
// Ensures `fn` runs at most once every `wait` ms.
// Options:
//  - leading:  fire immediately on first call in a window (default true)
//  - trailing: fire once more at the end of the window if calls happened
function throttle(fn, wait, { leading = true, trailing = true } = {}) {
  let lastCallTime = 0;
  let timer = null;
  let lastArgs, lastThis;
  let result;

  function invoke(time) {
    lastCallTime = time;
    result = fn.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
    return result;
  }

  function trailingInvoke() {
    timer = null;
    if (trailing && lastArgs) {
      const now = Date.now();
      // when leading is false, reset so next burst can fire immediately
      if (!leading) lastCallTime = 0;
      result = invoke(now);
    }
  }

  function throttled(...args) {
    const now = Date.now();
    if (!leading && lastCallTime === 0) lastCallTime = now;

    const remaining = wait - (now - lastCallTime);
    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      result = invoke(now);
    } else if (!timer && trailing) {
      timer = setTimeout(trailingInvoke, remaining);
    }
    return result;
  }

  throttled.cancel = () => {
    clearTimeout(timer);
    timer = lastArgs = lastThis = null;
    lastCallTime = 0;
  };

  throttled.flush = () => {
    if (timer) {
      clearTimeout(timer);
      trailingInvoke();
    }
    return result;
  };

  return throttled;
}
