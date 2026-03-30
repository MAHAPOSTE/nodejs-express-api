function charCount(str, ch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) {
            count++;
        }
    }
    return count;
}
console.log(charCount("google", "g"));
console.log(charCount("facebook", "o"));
console.log(charCount("twitter", "t"));