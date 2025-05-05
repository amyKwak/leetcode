function exclusiveTime(n, logs) {
  const exclusiveTime = new Array(n).fill(0);
  const stack = [];
  let prevTime = 0;

  for (const log of logs) {
    const [id, status, time] = log.split(":");
    const functionId = parseInt(id);
    const timestamp = parseInt(time);

    if (status === "start") {
      if (stack.length > 0) {
        // There is a function already running, update its time
        exclusiveTime[stack[stack.length - 1]] += timestamp - prevTime;
      }
      // Push the current function ID onto the stack
      stack.push(functionId);
      // Update prevTime to the current timestamp
      prevTime = timestamp;
    } else {
      // status === 'end'
      // Pop the function ID from the stack
      const finishedFunctionId = stack.pop();
      // Update the exclusive time for the finished function
      exclusiveTime[finishedFunctionId] += timestamp - prevTime + 1; // +1 to include the end timestamp
      // Update prevTime to the next timestamp after this function ended
      prevTime = timestamp + 1;
    }
  }

  return exclusiveTime;
}

// Example usage:
const n = 2;
const logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
console.log(exclusiveTime(n, logs)); // Output: [3, 4]
