// let a = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];

// function Swap(arr) {
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       let temp = arr[i];
//       arr[i] = arr[index];
//       arr[index] = temp;
//       index++;
//     }
//   }
//   console.log(arr);
// }

// Swap(a);

var x = 10;
function test() {
  if (x > 20) {
    let x = 50;
  }

  console.log(x);
  return x;
}
test(); //undefined
