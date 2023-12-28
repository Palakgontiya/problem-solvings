/**we need to create a function in such a way that it takes a function and whatever this callback function
 * this callback function will take an array and in each element of the array we will 
 * perform an operation and 
 * whatever will be the result on easch element that new value need to be pushed to a new array 
 * and that array will be the final resulting array
 
 */

let arr = [2, 4, 5, 6, 8, 7, 9];

Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;
};

let newMappedarray = arr.myMap((item) => {
  return item *5 ;
});

console.log(newMappedarray);
