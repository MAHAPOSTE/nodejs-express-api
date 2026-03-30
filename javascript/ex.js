const str = "java programming laguange";
const ch = ' ';
let count = 0;
for (let i = 0; i < str.length; i++) {
    const cch = str[i];
    if (cch === ch) {
        count++;
    }
}
console.log(count);