// My name is ankit jain & i'm from morena
/**step 1 convert the sentence into the array of words
 * step 2 take an empty string variable
 * step 3 run a loop through the array and check the length of each word in array
 * step 4 compare the length of the word and the length of the variable and assign the max length word to it
 * step 5 return the word finally
 */

function maxLengthWord(str) {
  let arr = str.split(" ");
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }
  return word;
}

console.log(maxLengthWord("My name is ankit jain & i'm from morena"));
