/**1.
 * 1 will check the length of both the words if equal then only move forward otherwise return false
 * 2 convert bothe the words to a set
 * 3 convert both the words into an object
 * 4 compare both the objects
 */

const isAnagram = (strOne, strTwo) => {
  let obj1 = {};
  let obj2 = {};
  if (strOne.length !== strTwo.length) {
    return "the given words are not anagram";
  }
  for (let i of strOne) {
    !obj1.hasOwnProperty(i) ? (obj1[i] = 1) : (obj1[i] += 1);
  }
  for (let i of strTwo) {
    !obj2.hasOwnProperty(i) ? (obj2[i] = 1) : (obj2[i] += 1);
  }

  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("bat", "tab"));
