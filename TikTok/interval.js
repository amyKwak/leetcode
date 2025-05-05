const customInterval = (callback, delay) => {
  let timeout;

  const interval = () => {
    callback();
    timeout = setTimeout(interval, delay);
  };

  interval();

  return {
    stop: () => {
      clearTimeout(timeout);
    },
  };
};

// Example usage
const myInterval = customInterval(() => {
  console.log("Hello, world!");
}, 1000);

// To stop the interval after some time (e.g., 5 seconds)
setTimeout(() => {
  myInterval.stop();
  console.log("Custom interval stopped.");
}, 5000);
