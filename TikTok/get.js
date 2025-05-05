const get = (object, path, defaultValue) => {
  if (typeof path === "string") {
    path = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  }

  let result = object;
  for (let i = 0; i < path.length; i++) {
    if (result == null) {
      return defaultValue;
    }
    result = result[path[i]];
  }

  return result === undefined ? defaultValue : result;
};
