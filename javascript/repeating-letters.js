// Reapeting the letters

function rL(str) {
    let r = "";
    for (let i = 0; i < str.length; i++) {
        r += str[i];
        r += str[i];
    }
    return r;
}
console.log(rL("Naveen"));

