// find all even number
function findAllEvens(arr) {
    const result = arr.filter(function(ele) {
        return ele % 2 == 0;
    });
    return result;
}
console.log(findAllEvens([10, 11, 12, 13, 14]));
 
// Has a in a string
 function hasA1(strArr1) {
    const result = strArr1.filter(function(ele) {
         return ele.includes("a");
});
return result;
 }
console.log(hasA1(["adam", "sara", "nick", "robin"]));



