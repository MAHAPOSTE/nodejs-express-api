function revString(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
          res = res + str[i];
    }
          return res;
}
console.log(revString("Google"));
const r = revString("Chatgpt");
console.log(r);