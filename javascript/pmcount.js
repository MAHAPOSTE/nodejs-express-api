const str = "++-+-++0";
let pCount = 0;
let mCount = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "+") {
        pCount++;
    }
    else if (str[i] == "-") {
        mCount++;                   
    }
    }
console.log(`There are ${pCount} pluses and ${mCount} minuses`);