// Finding how many "n"s present in a string

function dP(s) {
    let c = "";
    lS = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (lS[i] == "n") {
            c++;
        }
    }
    return c;
}
console.log(dP("Naveen"));