var isNumber = function (s) {
  // Regular expression for a valid number
  const numberRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
  return numberRegex.test(s.trim());
};
