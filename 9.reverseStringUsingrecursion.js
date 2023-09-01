const reverseStringUsingRecursion = (str) => {
  let arr = str.split("");
  let result = "";
  let i = arr.length - 1;
  const reverse = (str) => {
    result += arr[i];
    if (i > 0) {
      i--;
      reverse(str);
    }
  };
  reverse(str);
  console.log(result);
};

reverseStringUsingRecursion("Hello my name is Palak");
