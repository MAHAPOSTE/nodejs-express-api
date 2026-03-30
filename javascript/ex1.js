function returnValue(arr) {
const result = arr.filter((ele) => {
   return ele;
});
return result;
}
console.log(returnValue([10, 0, -1, '', "dct", null, NaN, []]));
console.log(returnValue([false, 0, undefined]));

function testJackpot(arr1) {
    const result1 = arr1.every((ele1) => {
        return ele1 == arr1[0];
    });
    return result1;
}
console.log(testJackpot(["SS", "SS","SS", "Ss"]));
console.log(testJackpot(["SS", "SS","SS", "SS"]));
console.log(testJackpot(["&", "&&","&&&", "&&"]));

function testJackpot1(arr2) {
    const result2 = [];
      for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] == arr2[0]) {
                // return true;
            } else {
                return false;
            }
        }
    return true;
    }
console.log(testJackpot1(["SS", "SS","SS", "Ss"]));
console.log(testJackpot1(["SS", "SS","SS", "SS"]));
console.log(testJackpot1(["&", "&&","&&&", "&&"]));



