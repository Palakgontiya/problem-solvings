Input: matrix = matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

function rotateImg(arr) {
  let result = [];
  let current = [];

  for (let i = 0; i < arr.length; i++) {
    current = [];
    for (let j = arr.length - 1; j >= 0; j--) {
      current.push(arr[j][i]);
    }
    result.push(current);
  }
  return result;
}

console.log(rotateImg(matrix));
