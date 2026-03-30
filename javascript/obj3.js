function freqD(str) {
let res = {};
for (let ch of str) {
    /*if (ch in res) {
        res[ch]++;
    } else {
        res[ch] = 1;
    } */
res[ch] = (res[ch] ?? 0) + 1; // nullish operator
}
return res;
}
console.log(freqD("dct"));
console.log(freqD(""));
console.log(freqD("ddtdct"));
console.log(freqD("aabbab"));
console.log(freqD("a b a b"));