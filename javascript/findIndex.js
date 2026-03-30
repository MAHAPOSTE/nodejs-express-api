// findIndex() method will return the index of the first element that satisfies the condition
const arr = [10, 20, 30, 40, 50];
const index = arr.findIndex((num) => {
   return num >= 25;
});
console.log(index);