function unPack(obj) {
    let str = "";
    for (let key in obj) {
// using for loop
         for (let i = 1; i <= obj[key]; i++) {
           str += key;
         }
// using repeat method
        // str += key.repeat(obj[key]);
        }
        return str;
    }
console.log(unPack({a: 3, b: 2, c: 1}));