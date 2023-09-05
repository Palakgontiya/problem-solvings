// Write a program to check the Leap & Non Leap year

/** the year should be divisible by 4 and if its a century year it should be divisible by 4000 */

const checkLeapYaer = (year) => {
  if (typeof year !== "number") {
    return "invalid parameter passed";
  }
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap yaer`;
  } else {
    return `${year} is not a leap yaer`;
  }
};

console.log(checkLeapYaer(1800));
