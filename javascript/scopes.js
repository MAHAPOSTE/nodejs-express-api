const n = 10;
function test1() {
console.log(n); // 10 
const m = 20;
function test2() {
console.log(m); // 20
const k = 30;
function test3() {
// console.log(k); - reference error - k cannot access before initialization
const k = 300;
console.log(k); // 300
}
test3();
}
test2();
}
test1();
console.log(n); // 10
//console.log(k); // reference error - k not defined

