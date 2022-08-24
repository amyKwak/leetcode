var longestPalindrome = function (s) {
  let start = 0;

  for (let i = 1; i < s.length; i++) {
    let window = s.slice(start, i),
      rWindow = window.split("").reverse().join();
    console.log(rWindow);
  }
};
