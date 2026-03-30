// Count the capital letters

function cC(str) {
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            c++;
        }
    }
    return c;
}
console.log(cC("Naveen"));