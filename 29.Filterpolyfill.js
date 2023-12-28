/**we need to create a function in such a way that it takes a function and whatever this callback function
 * this callback function will take an array and in each element of the array we will perform some operation/validation
 * now for whichever element it will return true
 * we need to store that element in a new array and that new array will be returned by the Pollyfil.
 */
let arr = [2, 4, 5, 6, 8, 7, 9];

Array.prototype.myFilter = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

let newFilteredarray = arr.myFilter((item) => {
  return item % 2 === 0;
});

console.log(newFilteredarray);
