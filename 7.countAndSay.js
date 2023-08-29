// if n = 1 return '1'
// else iterate through the result and count the adjacent same numbers and result with count+num
// every time the result will be updated and we will loop through it n timesfinally return the result

function countAndSay(n) {
  let result = "1";
  let output = "";
  let count = 1;

  for (let j = 1; j < n; j++) {
    if (n === 1) {
      return result;
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i] === result[i + 1]) {
        count++;
      } else {
        output += count + result[i];
        count = 1;
      }
    }

    result = output;
    output = "";
  }

  return result;
}

console.log(countAndSay(5));
