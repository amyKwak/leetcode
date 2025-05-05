const decodeString = (s) => {
  const stack = [];
  let currentStr = "";
  let currentNum = 0;

  for (const char of s) {
    if (!isNaN(char)) {
      currentNum = Number(char);
    } else if (char === "[") {
      stack.push(currentNum);
      stack.push(currentStr);

      currentNum = 0;
      currentStr = "";
    } else if (char === "]") {
      const lastStr = stack.pop();
      const repeatNum = stack.pop();

      currentStr = lastStr + currentStr.repeat(repeatNum);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
};

const s1 = "3[a2[c]]";
console.log(decodeString(s1)); // accaccacc
