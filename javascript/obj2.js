const arr = ["a", "dc", "xyz"];
let acc = {};
for (let ele of arr) {
    acc[ele] = ele.length;
}
console.log(acc);

const str = "abc";
let acc1 = {};
for (let char of str) {
    acc1[char] = char.toUpperCase();
}
console.log(acc1);




