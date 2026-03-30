// Concat first n last character

function fL(s) {
    let r = "";
    let fC = s[0];
    let lC = s[s.length - 1];
    r = fC + lC;
    return r;
}
console.log(fL("Naveen"));

