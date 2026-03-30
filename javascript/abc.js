const str = "UcUNFYGaFYFYGtNUH";
let result = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      result += str[i];
    }
}
console.log(result);