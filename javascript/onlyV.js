const str = "javascript";
let res = "";
const sstr = "aeiou";
for (let i = 0; i < str.length; i++) {
    if (sstr.includes(str.charAt(i))) {
        res = res + str.charAt(i);
    }
}
console.log(res);