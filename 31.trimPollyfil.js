// removes whitespace characters from the beginning and end of a string
/** we need to identify only the white spaces which are at the beginning and at the end
 * of the string and not in between*/

let str = "   palak   ";
String.prototype.myTrimMethod = function () {
  let result = "";
  let startIndex = 0;
  let endIndex = this.length - 1;

  for (let i = startIndex; i <= endIndex; i++) {
    if (this[i] === " ") startIndex++;
    else break;
  }
  for (let i = endIndex; i > startIndex; i--) {
    if (this[i] === " ") endIndex--;
    else break;
  }

  for (let i = startIndex; i <= endIndex; i++) {
    result += this[i];
  }

  return result;
};
let result1 = str.myTrimMethod();

console.log(result1);
console.log(str);
