
// function namesUpper(strArr) {   - // function declaration
const namesUpper = function(strArr) { // function expression
    const result = [];
    strArr.forEach((ele) => {
        result.push(ele.toUpperCase());
    });
   return result;
}
const result = namesUpper(["ravi", "aditya", "kavi"]);
console.log(result);