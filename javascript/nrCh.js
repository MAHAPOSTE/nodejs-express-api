let count = 0;
function charCount(str, ch) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) {
            count++;
        }
    }
    return count;
}
console.log(charCount("streess", "s"));
