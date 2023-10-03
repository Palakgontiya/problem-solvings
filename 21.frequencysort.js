// We will make an object whech will be having keys as the elements of the string and values as the count of that element
// now we will sort that object and run a loop thrugh it
// with each iteration we will create a resulting string that will have each entry of the object repeated its paired value times
//  example obj = {
//     a : 3,
//     b: 1
// }
//  resultingstring "aaab"

const frequencySort = (str) => {
  let resulrString = "";
  let obj = {};

  for (let i of str) {
    if (!obj.hasOwnProperty(i)) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  console.log(entries);
  for (let i = 0; i < entries.length; i++) {
    console.log(i);
    let valueToAdd = "";
    valueToAdd = entries[i][0].repeat(entries[i][1]);
    resulrString += valueToAdd;
  }
  return resulrString;
};

console.log(frequencySort("cCaaAAbbbBBBaaaa"));
