// repeated characters in string
function repeatedChar(str) {
    const result = [];
    const obj = {};
    for (let ch of str) {
        if (ch in obj) {
            obj[ch]++;
        } else {
            obj[ch] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            result.push(key);
        }
    }
    return result;
}
console.log(repeatedChar("aabbcab"));


// non repeated characters
function nonRepeatedChar(str) {
    const result = [];
    const obj = {};
    for (let ch of str) {
        if (ch in obj) {
            obj[ch]++;
        } else {
            obj[ch] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            result.push(key);
        }
    }
    return result;
}
console.log(nonRepeatedChar("aabbcabd"));