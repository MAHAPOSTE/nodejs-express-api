const str = "javascript";
let res = "";
const sstr = "aeiou";
for (let i = 0; i < str.length; i++) {
    if (!sstr.includes(str.charAt(i))) {
        res = res + str.charAt(i);
    }
// other way to print the consonants :-         

        // if (sstr.includes(str.charAt(i))) {
        //continue; }
        // else {                                                              
        //res = res + str.charAt(i); }
}                 
console.log(res);
