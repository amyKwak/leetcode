var depthSum = function (nestedList) {
  let result = 0;

  const helper = (arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isInteger()) {
        result += arr[i].getInteger() * depth;
      } else {
        helper(arr[i].getList(), depth + 1);
      }
    }
  };

  helper(nestedList, 1);
  return result;
};
