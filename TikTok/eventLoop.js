const func = () => {
  setTimeout(function () {
    console.log("1");

    new Promise(function (resolve) {
      console.log("2");
      resolve();
    }).then(function () {
      console.log("3");
    });
    console.log("4");
  }, 1000);

  console.log("5");
};

console.log(func());
