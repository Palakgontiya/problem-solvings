const openingChars = "({[";
const closingChars = ")}]";

function validParanthisis(str) {
  const arr1 = [];

  if (closingChars.includes(str[0])) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (openingChars.includes(str[i])) {
      arr1.push(str[i]);
    } else if (
      closingChars.indexOf(str[i]) ===
      openingChars.indexOf(arr1[arr1.length - 1])
    ) {
      arr1.pop();
    } else {
      return false;
    }
  }
  return arr1.length === 0;
}

console.log(validParanthisis("{}()[]"));
