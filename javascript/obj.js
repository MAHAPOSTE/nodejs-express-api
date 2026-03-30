const person = {
    firstName: "Mahalaxmi",
    lastName: "Poste",
    email: "maha@gmail.com"
}
console.log(person.firstName);
console.log(Object.keys(person)); // get all keys
console.log(Object.values(person)); // get all values
console.log(Object.entries(person)); // ger all key -value pairs - object

console.log(Object.keys(person).length); //get length

// determine object is empty
const errors = {};
console.log(Object.keys(errors).length == 0); // true
console.log(Object.keys(person).length == 0); // false

// updating value of property
person.email = "poste@gmail.com";
console.log(person);

// adding a new key value pair
person.city = "bangalore";
console.log(person);

// removing a key value pair
delete person.lastName;
console.log(person);

// check if key is present
console.log("firstName" in person); // true

console.log(person.hasOwnProperty("dob")); // false

// check the value is present
console.log(Object.values(person).includes("bangalore")); // true