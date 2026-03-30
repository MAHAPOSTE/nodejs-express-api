function mergeArr(arr1, arr2) {
    //const arr3 = arr1.concat(arr2);
    //return arr3;
    // using spread syntax
    const arr4 = [...arr1, ...arr2];
    return arr4;
}
console.log(mergeArr([1, 2, 3], [4,5]));