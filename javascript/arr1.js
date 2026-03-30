const fruits = ["Apple", "Orange", "Mango", "Banana"];
console.log("Total Fruits: " + fruits.length);
//for (let i = 0; i < fruits.length; i++) {
for (let fruit of fruits) {
    console.log(fruit);
}