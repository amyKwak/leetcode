// var SparseVector = function (nums) {
//   // Store non-zero elements in a map (key: index, value: element)
//   this.map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       this.map.set(i, nums[i]);
//     }
//   }
// };

// SparseVector.prototype.dotProduct = function (vec) {
//   let result = 0;

//   // Iterate over the non-zero elements of this vector
//   for (let [index, value] of this.map.entries()) {
//     // Check if the other vector also has a non-zero value at this index
//     if (vec.map.has(index)) {
//       result += value * vec.map.get(index);
//     }
//   }

//   return result;
// };

var SparseVector = function (nums) {
  this.map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this.map.set(i, nums[i]);
    }
  }
};

// Return the dotProduct of two sparse vectors or one sparse and one dense vector
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let result = 0;

  // Check which sparse vector has fewer non-zero elements
  let smallerMap = this.map.size < vec.map.size ? this.map : vec.map;
  let largerMap = this.map.size >= vec.map.size ? this.map : vec.map;

  // Iterate over the non-zero elements of the smaller map
  for (let [index, value] of smallerMap.entries()) {
    if (largerMap.has(index)) {
      result += value * largerMap.get(index);
    }
  }

  return result;
};
