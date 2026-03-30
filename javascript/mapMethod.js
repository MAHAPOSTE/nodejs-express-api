
function namesUpperMap(strArr) {
    const result = strArr.map((ele) => {
        return ele.toUpperCase();
    });
    return result;
}
console.log(namesUpperMap(["ravi", "aditya", "kavi"]));

// sum of elements
function sumNum(arr) {
    let sum = 0;
    const result = arr.map(function(n) {
        return sum += n;
    });
    return sum;
}
console.log(sumNum([10, 20, 30]));

// using for loop
function toNamesUpper(strArr1) {
    let result1 = [];
    for (let i = 0; i <strArr1.length; i++) {
        result1.push(strArr1[i].toUpperCase());
    }
  return result1;
}
console.log(toNamesUpper(["ravi", "aditya", "kavi"]));

