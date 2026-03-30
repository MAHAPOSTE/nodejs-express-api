// reduce method is used to reduce the array to single value
// without initializing the value
const arr = [10, 20, 30, 40];
function sumArray(arr) {
    let total = arr.reduce(function(acc, ele) {
        return acc + ele;
    });
    return total;
}
console.log(sumArray(arr));

// with initializing the value
const arr1 = [10, 20, 30, 40];
function sumArray1(arr) {
    let total1 = arr1.reduce(function(acc1, ele1) {
        return acc1 + ele1;
    }, 0); //// with initializing the value
    return total1;
}
console.log(sumArray1(arr1));