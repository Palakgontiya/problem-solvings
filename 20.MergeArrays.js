//WAP that will take any number of arrays of objects combine them ( if the keys doesn't exist in the previous object then just add that else if the key is existing then concate string values and add the number values ) then return a object of objects.
//example :

const arr1 = [
  { name: "Joe Brown", goals: 0, assists: 0, points: 0 },
  { name: "Jim Bob", goals: 2, assists: 1, points: 3 },
  { name: "Harry Styles", goals: 1, assists: 1, points: 2 },
  { name: "Craig Mack", goals: 5, assists: 7, points: 12 },
  { name: "Dog", bones: 100 },
];

const arr2 = [
  {
    name: "Craig Mack",
    goals: 3,
    assists: 3,
    points: 6,
    ppg: 0,
    ppa: 0,
    pims: 0,
  },
  { name: "Jim Bob", goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
  {
    name: "Joe Brown",
    goals: 0,
    assists: 0,
    points: 0,
    ppg: 0,
    ppa: 0,
    pims: 0,
  },
  {
    name: "Harry Styles",
    goals: 0,
    assists: 0,
    points: 0,
    ppg: 0,
    ppa: 0,
    pims: 0,
  },
];



/**step 1 take an empty object that will be the final result
 * step 2 start traversing any of the array say arr1 the first element is an object with name:Joe Brown, we will now search this key value pair object in the other array say arr2
 * step 3 check if the name is already there as a key in the final object if no then set it as key and value would be an object
 * step 4 now we will run a loop through  { name: "Joe Brown", goals: 0, assists: 0, points: 0 }, and  {
      name: "Joe Brown",
      goals: 0,
      assists: 0,
      points: 0,
      ppg: 0,
      ppa: 0,
      pims: 0
    }, and check if the resulting object's Joe Brown object is having the keys (which are there in these two objects) already or not if no then set the keys with value 0 or add the values otherwise
    step 5 repeat step 4 untill we get all the arrays traversed
    step 6 return the resulting object
 */

const mergeArrays = (...arr) => {
  let result = {};

  for (let x = 0; x < arr.length; x++) {
    for (let i of arr[x]) {
      if (!result.hasOwnProperty(i.name)) {
        result[i.name] = {};
        
      }
        for (let j in i) {
            if (j !== "name") {
                if (!result[i.name].hasOwnProperty(j)) {
                  result[i.name][j] = 0; 
                }
                console.log("add");
                result[i.name][j] += i[j];
              }
          }
      }
    }
  

  return result
};

console.log(mergeArrays(arr1, arr2));
