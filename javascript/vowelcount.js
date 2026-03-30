const str = "javascript";
const vowels = "aeiou";
let vowelCount = 0;
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;
    }
}
console.log(vowelCount);
