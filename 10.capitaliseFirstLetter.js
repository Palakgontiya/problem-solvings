const reverseStringUsingRecursion = (str) => {
  let arr = str.split(" ");
  let result = "";
  console.log(result);
  let i = 0;
  const reverse = (str) => {
    result += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
    if (i < arr.length - 1) {
      i++;
      reverse(str);
    }
  };
  reverse(str);
  console.log(result);
};

reverseStringUsingRecursion("Hello my name is Palak");
