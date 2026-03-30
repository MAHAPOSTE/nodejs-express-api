// Vowel Replacer

function vR(s, c) {
    let r = "";
    const v = "aeiouAEIOU"
    for (let i = 0; i < s.length; i++) {
           if (v.includes(s[i])) {
              r += c;
           } else {
            r += s[i];
           }
    }
    return r;
}
console.log(vR("Naveen","m"));
