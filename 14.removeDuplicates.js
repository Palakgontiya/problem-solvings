// Remove duplicate elements from the Array - [1,2,3,4,1,2,3,4,5,8,9,6,4,4,2,1]



const arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 8, 9, 6, 4, 4, 2, 1];

function removeDuplicates(arr) {
  let strArr = [];
  for (let i of arr) {
    if (!strArr.includes(i)) {
      strArr.push(i);
    }
  }
  return strArr;
}

console.log(removeDuplicates(arr));
