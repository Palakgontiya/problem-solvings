// To find character occurance from the string

const findCharOccurence = (str, c) => {
    let Obj = {};
    for (let i of str.toLowerCase()) {
      !Obj.hasOwnProperty(i) ? (Obj[i] = 1) : (Obj[i] += 1);
    }
    return Obj[c];
  };
  
  console.log(findCharOccurence("VidhyaSkillSchool", 'l'));