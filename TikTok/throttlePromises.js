function throttlePromises(promises, max) {
  const results = [];
  let activeCount = 0;
  let currentIndex = 0;

  return new Promise((resolve, reject) => {
    function next() {
      if (currentIndex >= promises.length && activeCount === 0) {
        resolve(results);
        return;
      }

      while (activeCount < max && currentIndex < promises.length) {
        const promiseIndex = currentIndex++;
        activeCount++;
        promises[promiseIndex]()
          .then((result) => {
            results[promiseIndex] = result;
          })
          .catch(reject)
          .finally(() => {
            activeCount--;
            next();
          });
      }
    }

    next();
  });
}
