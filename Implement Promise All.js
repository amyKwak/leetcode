const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    // Result array to store the results of each promise
    let results = [];
    // Counter to track the number of promises that have resolved
    let resolvedCount = 0;

    // Iterate over the promises array
    promises.forEach((promise, index) => {
      // Convert non-promises to promises using Promise.resolve
      Promise.resolve(promise)
        .then((result) => {
          // Store the result in the results array at the corresponding index
          results[index] = result;
          resolvedCount++; // Increment the count of resolved promises

          // If all promises have resolved, resolve the outer promise
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // If any promise rejects, reject the outer promise
          reject(error);
        });
    });

    // If the promises array is empty, resolve immediately with an empty array
    if (promises.length === 0) {
      resolve(results);
    }
  });
};
