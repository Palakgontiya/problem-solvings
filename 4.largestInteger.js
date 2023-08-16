/**we have an array of elements we need to find the k'th largest element run a
loop through the elements and run k times find the first largest element
eliminate the largest elements untill the loop is runing for k'th time**/
function returnKthElement(nums, k) {
  let largestElem = -10000;
  for (let i = 0; i < k; i++) {
    let largestIndex = 0;
    largestElem = -10000;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] >= largestElem) {
        largestIndex = j;
        largestElem = nums[j];
      }
    }

    nums.splice(largestIndex, 1);
  }
  return largestElem;
}

const num = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 5;

console.log(returnKthElement(num, k));
