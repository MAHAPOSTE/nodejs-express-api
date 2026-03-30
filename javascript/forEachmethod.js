const names = ["Virat", "Rohit", "Ishan"];
//names.forEach(function(name, i, arr) {
    //console.log(`name: ${name} index: ${i} Array: ${arr}`);
names.forEach((name) => {
    console.log(`name: ${name}`);
})

// anonymous function - ES5 feature
const prices = [10, 20, 30];
let sum = 0;
prices.forEach(function(n) {
    sum += n;
});
console.log(sum);

// Arrow Function { => } - ES6 feature
const prices1 = [10, 20, 30];
let sum1 = 0;
prices1.forEach ((n) => {
    sum1 += n;
});
console.log(sum1);
