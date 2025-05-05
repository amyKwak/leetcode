console.log("hello");
const promiseAll = (promiseArr) => {
  return new Promise((resolve, reject) => {
    const resultsArr = [];

    for (const promise of promiseArr) {
      promise
        .then((result) => {
          resultsArr.push(result);

          if (resultsArr.length === promiseArr.length) {
            resolve(resultsArr);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

const fakePromise = (value, duration, rejectForce) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectForce) {
        reject(new Error("error"));
        return;
      }

      resolve(value);
    }, duration);
  });
};

promiseAll([fakePromise(1, 200), fakePromise(123, 400), fakePromise(300, 10)])
  .then((resultsArr) => {
    console.log(resultsArr);
  })
  .catch((err) => {
    console.log(err);
  });
