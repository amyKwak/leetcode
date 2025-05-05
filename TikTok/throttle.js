const throttle = (callback, delay = 1000) => {
  let flag = true;

  return () => {
    if (flag) {
      callback.apply(this, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const handleThrottle = () => {
  if (timerRef.current !== null) {
    return;
  }
  const timerId = setTimeout(() => {
    timerRef.current = null;
    handleVideoVisibility();
  }, 200);
  timerRef.current = timerId;
};
