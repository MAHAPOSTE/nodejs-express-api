const numbers = [98, 1, 99, 100, 36, 43];
function sumArray(arr) {
    const result = numbers.filter((ele) => {
        return ele % 2 == 0;
    });
    const total = result.reduce(function(acc, el) {
          return acc + el;
    });
    return total;
}
console.log(sumArray(numbers));

// piping of methods

//const result = numbers.filter((ele) => {
       // return ele % 2 == 0;
    //}).reduce(function(acc, el) {
          //return acc + el;
   // });


