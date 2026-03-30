const str = "javascript";
let count = 0;
for (let i = 0 ; i < str.length; i++) {
    if (str.charAt(i) === "a") {
        count = count + 1;
    }
}
console.log("a repeated " + count + " times.");