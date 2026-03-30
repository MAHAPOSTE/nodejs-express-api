// some() method
const numbers = [1, 2, 3, 4, 5];
const result = numbers.some((num) => {
    return num > 4;
});
console.log(result);

// every() method
const numbers1 = [2, 4, 6];
const result1 = numbers1.every((num1) => {
    return num1 % 2 == 0;
});
console.log(result1);