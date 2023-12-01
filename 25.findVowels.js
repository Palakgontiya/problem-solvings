// To find vowels and its count in a given string

/**1. we will iterate through the string and check if a perticular char is a vowel or no
 * for this step we will take a string of all the vowels say "aeiou" and use this to check the vowels
 * 2. now we will use object method to show all the char occurences.
 */

const countOfVowels = (str) => {
    const vowels = "aeiou";
    let vowelObj = {};
  
    for (let i of str.toLowerCase()) {
      if (vowels.includes(i)) {
        !vowelObj.hasOwnProperty(i) ? (vowelObj[i] = 1) : (vowelObj[i] += 1);
      }
    }
    return vowelObj;
  };
  
  console.log(countOfVowels("VIdhyaSkillSchOol"));