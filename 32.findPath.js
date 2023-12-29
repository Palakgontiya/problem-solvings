var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    const arrPath = path.split(".");

    let currentObject = object;
    
    for (let i = 0; i < arrPath.length; i++) {
        const key = arrPath[i];

        if (currentObject[key] !== undefined) {
            currentObject = currentObject[key];
        } else {
          
            return undefined;
        }
    }

    return currentObject;
};

console.log(findPath(obj, 'a.b.c')); // Output: 12
console.log(findPath(obj, 'a.b.j')); // Output: false
console.log(findPath(obj, 'a.k'));   // Output: null
console.log(findPath(obj, 'x.y.z')); // Output: undefined

