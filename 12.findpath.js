/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

/* first of all we will create an array of the path parameter saperated by .
then we will run a loop through that array and try to find the value*/

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (object, path) => {
    const pathArr = path.split('.');
    let result = object;

    for (const key of pathArr) {
        if (result.hasOwnProperty(key)) {
            result = result[key];
        } else {
            return undefined; 
        }
    }

    return result;
};


console.log(findPath(obj, "a.b.c"));
