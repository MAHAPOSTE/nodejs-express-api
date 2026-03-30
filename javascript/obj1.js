// get keys without using Object.keys
function getKeys(obj) {
const result = [];
for (let key in obj) {
 result.push(key);
}
return result;
}
console.log(getKeys({a: 1, b: 2, c: 3})); // ['a', 'b', 'c']

// get values without using Object.values
function getValues(obj) {
const result = [];
for (let key in obj) {
 result.push(obj[key]);
}
return result;
}
console.log(getValues({a: 1, b: 2, c: 3}));

 
// sumValues
function sumValues(obj) {
let sum = 0;
for (let key in obj) {
 sum = obj[key] + sum;
}
 return sum;
}
console.log(sumValues({a: 1, b: 2, c: 3}));


// convert object 
function convertOb(obj) {
    let result = [];
    for (let key in obj) {
        let out =[key, obj[key]]

        result.push(out);
    }
    return result;
}
console.log(convertOb({a: 1, b: 2, c: 3}));
